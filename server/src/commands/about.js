module.exports = {
  text: "!about",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "Hey! I'm a frontend developer that streams my web development journey here on Twitch. Follow me as I work on projects, read docs, learn new technology and more! I appreciate your support."
    );
  },
};
