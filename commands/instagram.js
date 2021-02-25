module.exports = {
  text: "!instagram",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "https://instagram.com/splashleycodes");
  },
};
