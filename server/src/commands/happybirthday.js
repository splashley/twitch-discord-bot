module.exports = {
  text: "!happybirthday",
  callback: (channel, tags, message, self, client) => {
    const parse = message.slice(1).split(" ");
    let streamerName = parse.splice(1);
    client.say(
      channel,
      `🎉 ✨ FeelsBirthdayMan 🥳🎂 HAPPY BIRTDHAY ${streamerName[0].toUpperCase()}!! 🎂🥳 FeelsBirthdayMan ✨ 🎉`
    );
  },
};
