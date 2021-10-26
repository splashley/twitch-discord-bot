const firebase = require("firebase");

const config = {
  apiKey: process.env.apiKey,
  authDomain: "twitchwordgame.firebaseapp.com",
  projectId: "twitchwordgame",
  storageBucket: "twitchwordgame.appspot.com",
  messagingSenderId: "826647704969",
  appId: "1:826647704969:web:77b1105a155656c0339d58",
};

const firebaseApp = firebase.initializeApp(config);
const increment = firebase.firestore.FieldValue.increment(1);

const db = firebaseApp.firestore();
const docRef = db.collection("WordGame").doc("wordGameState");
const highScoresDoc = db
  .collection("WordGame")
  .doc("highScores")
  .collection("players");

const taskManagement = db.collection("TaskManagement");
const pomodoro = db.collection("Pomodoro");

const getGameStatus = async () => {
  const gameData = await docRef.get();
  return gameData.exists ? gameData.data() : null;
};

const getHighScores = async () => {
  const highScoresData = await highScoresDoc.get();
  return highScoresData.exists ? highScoresData.data() : null;
};

const setGameStatus = async (data) => {
  const resData = await docRef.set(data);
  return resData;
};

const setHighScores = async ({ username, numOfWins }) => {
  const highScoreData = await highScoresDoc
    .doc(username)
    .update({ numOfWins: increment })
    .catch(() => {
      highScoresDoc.doc(username).set({ numOfWins: 1 });
    });
  return highScoreData;
};

const setTask = async ({ username, task }) => {
  const taskData = await taskManagement
    .doc(username)
    .set({ task, active: true });
  return taskData;
};

const deleteTask = async ({ username }) => {
  console.log("username", username);
  const taskData = await taskManagement
    .doc(username)
    .update({ task: "", active: false });
  return taskData;
};

const getTasks = async () => {
  let tasks = [];
  let activeTasks = await taskManagement.where("active", "==", true).get();
  activeTasks.forEach((doc) => {
    tasks.push({
      id: doc.id,
      active: doc.data().active,
      task: doc.data().task,
    });
  });
  return tasks;
};

const getTask = async ({ username }) => {
  const getTaskData = await taskManagement.doc(username).get();
  return getTaskData.exists ? getTaskData.data() : null;
};

const startTimer = async ({ number }) => {
  console.log("number", number)
  const activateTimer = await pomodoro
    .doc("Status")
    .update({ active: true, countdown: number });
    return activateTimer;
};

const disableTimer = async () => {
  const turnOffTimer = await pomodoro.doc("Status").update({active: false, countdown: 0});
  return turnOffTimer;
}

module.exports = {
  startTimer,
  disableTimer,
  setTask,
  deleteTask,
  getTask,
  getTasks,
  getGameStatus,
  setGameStatus,
  setHighScores,
  getHighScores,
  db,
  firebase,
};
