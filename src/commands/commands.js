module.exports = {
  text: "!commands",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "!hug, !about, !lurk, !wordgame, !8ball, !gamble, !points, !positive, !project, !banme, !bttvemotes, !music, !setup, !specs, !twitter, !discord, !instagram, !socials"
    );
  },
};
