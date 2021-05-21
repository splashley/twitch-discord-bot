module.exports = {
  text: "!discord",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "https://discord.gg/bJugrZZx Come join us!");
  },
};
