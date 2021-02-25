module.exports = {
  text: "!twitter",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "https://twitter.com/splashleycodes");
  },
};
