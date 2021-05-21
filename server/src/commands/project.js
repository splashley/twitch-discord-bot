module.exports = {
  text: "!project",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "Currently figuring out my next project..");
  },
};
