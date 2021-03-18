const randomWord = require("random-word");
const firebase = require("../firebase");

module.exports = {
  text: "!wordgame",
  callback: (channel, tags, message, self, client) => {
    let originalWord = "";
    let changedWord = "";

    const checkGameStatus = async () => {
      const { active, scrambled } = await firebase.getGameStatus();
      if (active === true) {
        client.say(
          channel,
          `There is already a game going on. The scrambled word is ${scrambled}. Type !guess word to guess your answer. Good luck!`
        );
      } else {
        generateWord();
      }
    };

    const generateWord = () => {
      let word = randomWord();
      if (word.length <= 5) {
        generateWord();
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
      client.say(
        channel,
        `The shuffled word is ${changedWord}. You can guess by entering !guess with your guessed word. Good luck!`
      );
    };

    const storeGameDetails = (origWord, shuffWord) => {
      firebase
        .setGameStatus({
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

    checkGameStatus();
  },
};
