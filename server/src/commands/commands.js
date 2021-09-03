module.exports = {
  text: "!commands",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "!hug, !task, !about, !lurk, !wordgame, !gamble, !points, !positive, !project, !banme, !bttvemotes, !guessnumber, !music, !rps, !setup, !specs, !steam, !song, !theme, !twitter, !tiktok, !discord, !instagram, !socials"
    );
  },
};
