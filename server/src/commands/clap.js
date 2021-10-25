module.exports = {
  text: "!clap",
  callback: (channel, tags, message, self, client) => {
    const parse = message.slice(1).split(" ");
    const user = parse.splice(1);
    client.say(channel, `peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap ${user} peepoClap`);
  },
};
