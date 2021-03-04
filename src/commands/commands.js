module.exports = {
  text: "!commands",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "!hug, !about, !lurk, !8ball, !gamble, !points, !quote, !project, !banme, !bttvemotes, !music, !setup, !specs, !twitter, !discord, !instagram, !socials"
    );
  },
};
