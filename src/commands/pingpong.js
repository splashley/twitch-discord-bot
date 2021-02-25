module.exports = {
  text: "!ping",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "pong");
  },
};
