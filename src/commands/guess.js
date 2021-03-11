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
