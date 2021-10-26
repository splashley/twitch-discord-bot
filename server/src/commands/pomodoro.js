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
        switch (action[0]) {
          case "break":
            firebase
              .startTimer({ number: 5 })
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
            break;
          case "reset":
            firebase
              .startTimer({ number: 0 })
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
            break;
          case "disable":
            firebase
              .disableTimer()
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
            break;
          default:
            break;
        }
      }
    }
  },
};
