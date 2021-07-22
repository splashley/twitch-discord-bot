module.exports = {
    text: "!steam",
    callback: (channel, tags, message, self, client) => {
      client.say(
        channel,
        "https://steamcommunity.com/id/splashley/"
      );
    },
  };
  