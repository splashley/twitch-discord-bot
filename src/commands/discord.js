module.exports = {
  text: "!discord",
  callback: (channel, tags, message, self, client) => {
    client.say(channel, "https://discord.gg/S3dXsyTs Come join us!");
  },
};
