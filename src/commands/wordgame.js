const randomWord = require("random-word");

module.exports = {
  text: "!wordgame",
  callback: (channel, tags, message, self, client) => {
    const verifyWordLength = () => {
      let word = randomWord();
      console.log(word);
      if (word.length <= 5) {
        verifyWordLength();
      } else {
        shuffleWord(word);
      }
    };
    const shuffleWord = (word) => {
      const newword = word.split("").sort(func).join("");
      console.log(newword);
    };
    function func(a, b) {
      return 0.5 - Math.random();
    }
    verifyWordLength();
    client.say(channel, "");
  },
};
