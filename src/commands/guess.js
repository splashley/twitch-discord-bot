const firebase = require("../firebase");

module.exports = {
  text: "!guess",
  callback: (channel, tags, message, self, client) => {
    const guesser = tags.username;
    const parse = message.slice(1).split(" ");
    const guessedWord = parse.splice(1);
    console.log(guessedWord);
    const checkAnswer = async () => {
      const { original, active } = await firebase.getGameStatus();
      if (active === false) {
        client.say(
          channel,
          "FeelsBadMan There's currently no game in session. Enter !wordgame to start a new game."
        );
      } else {
        if (original === guessedWord[0]) {
          firebase.setGameStatus({
            active: false,
            original: "",
            scrambled: "",
          });
          firebase.setHighScores({
            numOfWins: 1,
            username: `${guesser}`,
          });
          client.say(
            channel,
            `pepeD Congrats, ${guesser}, you got it right! pepeD `
          );
        } else {
          client.say(channel, `FeelsBadMan FeelsBadMan ${guesser} try again`);
        }
      }
    };

    checkAnswer();
  },
};
