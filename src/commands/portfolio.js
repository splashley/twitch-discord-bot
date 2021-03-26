module.exports = {
  text: "!portfolio",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "www.ashleyhynes.com");
  },
};
