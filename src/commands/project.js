module.exports = {
  text: "!project",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "Working on my new Twitch Bot via node.js");
  },
};
