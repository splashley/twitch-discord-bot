module.exports = {
  text: "!commands",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "!about, !project, !bttvemotes, !music, !setup, !specs, !twitter, !discord"
    );
  },
};
