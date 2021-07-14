module.exports = {
    text: "!theme",
    callback: (channel, tags, message, self, client) => {
      client.say(
        channel,
        "VS Code Theme: A Touch of Lilac"
      );
    },
  };
  