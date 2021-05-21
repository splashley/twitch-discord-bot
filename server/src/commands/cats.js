module.exports = {
  text: "!cats",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "I have six cats. Their names are Napoleon, Milo, Abby, Sam, Pearl and Diamond. AMA."
    );
  },
};
