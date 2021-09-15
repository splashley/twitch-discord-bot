const authorized = require("../authorized");
const firebase = require("../firebase");

module.exports = {
  text: "!pomodoro",
  callback: (channel, tags, message, self, client) => {
    const parse = message.slice(1).split(" ");
    const action = parse.splice(1);
    // Check to see if user doing !pomodoro is authorized or not
    if (!authorized.includes(tags.username)) {
      client.say(
        channel,
        "Sorry, only Splashley + mods can do use this command."
      );
    } else {
      if (!isNaN(parseInt(action))) {
        // Store the time and activate the pomodoro in the firebase
        let number = parseInt(action);
        firebase
          .startTimer({ number })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
      {
        console.log("this is the else");
      }
      // Reset pomodoro !pomodoro reset
      // Break time pomodoro !pomodoro break (5mins by default)
    }
  },
};
