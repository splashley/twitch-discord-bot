const firebase = require("firebase");
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "twitchwordgame.firebaseapp.com",
  projectId: "twitchwordgame",
  storageBucket: "twitchwordgame.appspot.com",
  messagingSenderId: "826647704969",
  appId: "1:826647704969:web:77b1105a155656c0339d58",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
var docRef = db.collection("WordGame").doc("wordGameState");

module.exports = {
  text: "!guess",
  callback: (channel, tags, message, self, client) => {
    const guesser = tags.username;
    const parse = message.slice(1).split(" ");
    const guessedWord = parse.splice(1);

    console.log(guessedWord);

    const checkAnswer = () => {
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            let currentAnswer = doc.data();
            if (currentAnswer.original === true) {
              client.say(
                channel,
                `There is a game in progress already. The scrambled word is ${currentGameStatus.scrambled}. Good luck!`
              );
            } else {
              verifyWordLength();
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };

    client.say(channel, "test test");
  },
};
