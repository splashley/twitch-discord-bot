const randomWord = require("random-word");
const { getGameStatus } = require("../firebase");

module.exports = {
  text: "!wordgame",
  callback: (channel, tags, message, self, client) => {
    let originalWord = "";
    let changedWord = "";

    const gameStatus = () => {
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            let getGameStatus = doc.data();
            if (getGameStatus.active === true) {
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
      client.say(channel, `The shuffled word is ${changedWord}. Good luck!`);
    };

    const storeGameDetails = (origWord, shuffWord) => {
      return getGameStatus
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

    gameStatus();
  },
};
