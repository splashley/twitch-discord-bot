module.exports = {
  text: "!discord",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "https://discord.gg/ZJrrvp4U Come join us!");
  },
};
