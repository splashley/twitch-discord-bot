module.exports = {
  text: "!schedule",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "splash86Hi Due to the nature of my schedule at the moment, there are no set days and times. However, I typically stream in the evening in ET.");
  },
};
