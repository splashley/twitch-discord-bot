module.exports = {
  text: "!banme",
  callback: (channel, tags, message, self, client) => {
    client.ban(channel, tags.username);
    let username = tags.username;
    let reason = "because they requested it";
    client.say(channel, `/me bans ${username} ${reason}`);
  },
};
