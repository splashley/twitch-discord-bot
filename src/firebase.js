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

const db = firebaseApp.firestore();
const docRef = db.collection("WordGame").doc("wordGameState");

const getGameStatus = async () => {
  const gameData = await docRef.get();
  return gameData.exists ? gameData.data() : null;
};

const setGameStatus = async (data) => {
  const resData = await docRef.set(data);
  return resData;
};

module.exports = {
  getGameStatus,
  setGameStatus,
};
