const randomWord = require("random-word");
const firebase = require("../firebase");

module.exports = {
  text: "!wordgame",
  callback: (channel, tags, message, self, client) => {
    let originalWord = "";
    let changedWord = "";

    const gameStatusTrue = () => {
      client.say(
        channel,
        `There is a game in progress already. The scrambled word is ${currentGameStatus.scrambled}. Good luck!`
      );
    };

    const checkGameStatus = async () => {
      const { active, scrambled } = await firebase.getGameStatus();
      if (active === "true") {
        client.say(
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
      firebase.storeGameDetails(originalWord, changedWord);
      client.say(channel, `The shuffled word is ${changedWord}. Good luck!`);
    };

    checkGameStatus();
  },
};
