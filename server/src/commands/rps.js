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
    } else if (userAction === "scissors" && botAction === "lizard") {
      client.say(channel, `Congrats ${username}! You decapitated splashleybot`);
    } else if (userAction === "scissors" && botAction === "spock") {
      client.say(
        channel,
        `Sorry ${username}! Spock smashed the fuck out of you`
      );
    } else if (userAction === "paper" && botAction === "lizard") {
      client.say(channel, `Sorry ${username}! Splashleybot ate you good`);
    } else if (userAction === "paper" && botAction === "spock") {
      client.say(channel, `Congrats ${username}! You disproved splashleybot`);
    } else if (userAction === "rock" && botAction === "lizard") {
      client.say(channel, `Congrats ${username}! You CRUSHED splashleybot`);
    } else if (userAction === "rock" && botAction === "spock") {
      client.say(channel, `Ouufff ${username}! Splashleybot vapourized you!`);
    } else if (userAction === "lizard" && botAction === "spock") {
      client.say(channel, `Congrats ${username}! You poisoned splashleybot`);
    } else if (userAction === "spock" && botAction === "lizard") {
      client.say(channel, `Uhoh ${username}! You got poisoned by splashleybot`);
    } else if (userAction === "spock" && botAction === "paper") {
      client.say(channel, `Sorry ${username}! Splashleybot disproved you!`);
    } else if (userAction === "spock" && botAction === "rock") {
      client.say(channel, `Congrats ${username}! You vapourized splashleybot`);
    } else if (userAction === "spock" && botAction === "scissors") {
      client.say(channel, `Congrats ${username}! You SMASHED splashleybot`);
    } else if (userAction === "lizard" && botAction === "paper") {
      client.say(channel, `Congrats ${username}! You ate splashleybot`);
    } else if (userAction === "lizard" && botAction === "rock") {
      client.say(channel, `Ouuff ${username}! Splashleybot crushed you`);
    } else if (userAction === "lizard" && botAction === "scissors") {
      client.say(
        channel,
        `Uhoh ${username}! Splashleybot decapitated you!! RIP`
      );
    }
  },
};
