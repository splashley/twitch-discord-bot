const { db, firebase } = require("../firebase");
const docRef = db.collection("GuessNumberGame").doc("state");

module.exports = {
  text: "!guessnumber",
  callback: (channel, tags, message, self, client) => {
    const user = tags.username;
    const containsHandle = message.slice(1).split(" ");
    const guessedNumber = containsHandle.splice(1)[0];

    // When a user enters !guessnumber [number] or !guessnumber, we need to check to see if there is an active game or not in Firebase
    const getGameStatus = async () => {
      const gameData = await docRef.get();
      return gameData.exists ? gameData.data() : null;
    };

    const setGameStatus = async (data) => {
      const resData = await docRef.set(data);
      return resData;
    };

    const checkGameStatus = async () => {
      const { active, randomNumber } = await getGameStatus();
      // If there is no active game, we need to create a randomNumber and update Firebase
      if (active === false) {
        const generatedNumber = Math.floor(Math.random() * 101);
        setGameStatus({
          active: true,
          randomNumber: `${generatedNumber}`,
        });
        // If there is an active game, we need to take the number and see if it's between 0 and 100.
      } else {
        if (guessedNumber > 101 || guessedNumber < 0) {
          // If the number is over 100 or lower than 0, return a "choose between 0 to 100 message" to user
          client.say(
            channel,
            `Hey ${user}! You can only guess between 0 and 100! Try again`
          );
        } else {
          // If the number is between 0 and 100, compare it to the one stored in Firebase.
          // If there is a match, send a congrats message and set the active status to false in Firebase
          if (guessedNumber === randomNumber) {
            setGameStatus({
              active: false,
              randomNumber: 0,
            });
            client.say(channel, `Congrats ${user}! YOU WIN! `);
            // If there isn't a match, send a try again message to the user
          } else {
            client.say(
              channel,
              `Sorry ${user}, you got the wrong number, try again please!`
            );
          }
        }
      }
    };
    checkGameStatus();
  },
};

// When a user enters !guessnumber [number] or !guessnumber, we need to check to see if there is an active game or not in Firebase
// If there is no active game, we need to create a randomNumber and update Firebase
// If there is an active game, we need to take the number and see if it's between 0 and 100.
// If the number is over 100 or lower than 0, return a "choose between 0 to 100 message" to user
// If the number is between 0 and 100, compare it to the one stored in Firebase.
// If there is a match, send a congrats message and set the active status to false in Firebase
// If there isn't a match, send a try again message to the user
