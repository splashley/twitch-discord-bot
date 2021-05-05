module.exports = {
  text: "!discord",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "https://discord.gg/eVXPjHb2 Come join us!");
  },
};
