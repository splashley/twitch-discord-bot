module.exports = {
  text: "!quote",
  callback: (channel, tags, message, self, client) => {
    const storedMessagesArr = [
      "Be brave enough to suck at something new today",
      "Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water. - Zen Kōan",
      "If you were born with the weakness to fall, you were born with the strength to rise",
    ];
    const selectedMessage =
      storedMessagesArr[Math.floor(Math.random() * storedMessagesArr.length)];
    client.say(channel, `${selectedMessage}`);
  },
};
