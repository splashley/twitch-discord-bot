module.exports = {
  text: "!github",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "www.github.com/splashley");
  },
};
