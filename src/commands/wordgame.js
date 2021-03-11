const randomWord = require("random-word");
const { gameStatus } = require("../firebase");

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

    gameStatus();
  },
};
