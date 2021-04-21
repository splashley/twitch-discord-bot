const authorized = require("./authorized");

module.exports = {
  text: "!so",
  callback: (channel, tags, message, self, client) => {
    const parse = message.slice(1).split(" ");
    const streamerName = parse.splice(1);
    if (authorized.includes(tags.username)) {
      client.say(
        channel,
        `pepeD Check out ${streamerName}! Their Twitch is www.twitch.com/${streamerName} pepeD`
      );
    } else {
      client.say(channel, "Sorry, only Splashley can do shoutouts");
    }
  },
};
