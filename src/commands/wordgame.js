const randomWord = require("random-word");
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appIkxuV9woNq04JG"
);

module.exports = {
  text: "!wordgame",
  callback: (channel, tags, message, self, client) => {
    // Function generates a random word, verifies length and passes word on to Shuffleword function
    const verifyWordLength = () => {
      let word = randomWord();
      console.log(word);
      if (word.length <= 5) {
        verifyWordLength();
      } else {
        shuffleWord(word);
      }
    };

    // Gets word from verifyWordLength and shuffles it.
    const shuffleWord = (word) => {
      function func(a, b) {
        return 0.5 - Math.random();
      }
      const shuffledWord = word.split("").sort(func).join("");
      console.log(shuffledWord);
    };

    const storeGameDetails = () => {};
    // verifyWordLength();
    // client.say(channel, "");
  },
};
