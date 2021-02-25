module.exports = {
  text: "!music",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "I'm currently listening to: blah blah");
  },
};
