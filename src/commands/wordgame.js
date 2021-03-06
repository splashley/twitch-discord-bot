const randomWord = require("random-word");
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appIkxuV9woNq04JG"
);

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
      base("WordGame").create(
        [
          {
            fields: {
              randomWord: `${origWord}`,
              randomWordShuffled: `${shuffWord}`,
              status: "true",
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    };

    verifyWordLength();
    client.say(channel, `The shuffled word is ${changedWord}. Good luck!`);
  },
};
