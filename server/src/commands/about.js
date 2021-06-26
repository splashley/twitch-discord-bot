module.exports = {
  text: "!about",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "Samurai Zero is a 3rd person tactical hack and slash game set in the beautiful science fantasy world of Edo, inspired by the Feudal Japanese Samurai. Learn more about it here https://szero.dev/steam"
    );
  },
};
