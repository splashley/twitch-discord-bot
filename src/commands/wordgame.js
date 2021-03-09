const randomWord = require("random-word");
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

module.exports = {
  text: "!wordgame",
  callback: (channel, tags, message, self, client) => {
    let originalWord = "";
    let changedWord = "";

    const gameStatus = () => {};

    const verifyWordLength = () => {
      let word = randomWord();
      if (word.length <= 5) {
        verifyWordLength();
      } else {
        originalWord = word;
        shuffleWord(word);
      }
    };

    const shuffleWord = (word) => {
      function func(a, b) {
        return 0.5 - Math.random();
      }
      const shuffledWord = word.split("").sort(func).join("");
      changedWord = shuffledWord;
      storeGameDetails(originalWord, changedWord);
    };

    const storeGameDetails = (origWord, shuffWord) => {
      var wordGameRef = db.collection("WordGame").doc("wordGameState");

      return wordGameRef
        .update({
          active: true,
          original: `${origWord}`,
          scrambled: `${shuffWord}`,
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    };

    verifyWordLength();
    client.say(channel, `The shuffled word is ${changedWord}. Good luck!`);
  },
};
