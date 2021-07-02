module.exports = {
  text: "!rps",
  callback: (channel, tags, message, self, client) => {
    const actionList = ["rock", "paper", "scissors"];
    const username = tags.username;
    const parse = message.slice(1).split(" ");
    let userAction = parse.splice(1);
    const randomIndex = Math.floor(Math.random() * actionList.length);
    let botAction = actionList[randomIndex];

    userAction = userAction.toString();
    botAction = botAction.toString();
    console.log(userAction + " " + botAction);

    if (userAction === botAction) {
      client.say(channel, "Both actions were the same, try again!");
    } else if (userAction === "rock" && botAction === "paper") {
      client.say(
        channel,
        `splashleybot wrapped your rock with paper! Try again ${username}`
      );
    } else if (userAction === "rock" && botAction === "scissors") {
      client.say(
        channel,
        `Congrats ${username}! You beat splashleybot's scissors!`
      );
    } else if (userAction === "paper" && botAction === "rock") {
      client.say(
        channel,
        `Congrats ${username}! You wrapped splashleybot's rock`
      );
    } else if (userAction === "paper" && botAction === "scissors") {
      client.say(channel, `splashleybot cut you up! Try again ${username}`);
    } else if (userAction === "scissors" && botAction === "rock") {
      client.say(
        channel,
        `splashleybot smashed your scissors with her rock! Try again ${username}`
      );
    } else if (userAction === "scissors" && botAction === "paper") {
      client.say(channel, `Congrats ${username}! You cut splashleybot`);
    }
  },
};
