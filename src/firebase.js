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

module.exports = {
  getGameStatus,
  setGameStatus,
  setHighScores,
  getHighScores,
};
