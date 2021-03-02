module.exports = {
  text: "!hug",
  callback: (channel, tags, message, self, client) => {
    const hugger = tags.username;
    const parse = message.slice(1).split(" ");
    const streamerName = parse.splice(1);
    client.say(
      channel,
      `/me peepoHug ${hugger} gives ${streamerName} a big hug peepoHug`
    );
  },
};
