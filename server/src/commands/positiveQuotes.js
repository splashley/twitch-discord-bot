module.exports = {
  text: "!positive",
  callback: (channel, tags, message, self, client) => {
    const storedMessagesArr = [
      "Be brave enough to suck at something new today",
      "Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water. - Zen Kōan",
      "If you were born with the weakness to fall, you were born with the strength to rise",
      "Be proud because you're doing it, not because you're good",
      "The struggle you’re in today is developing the strength you need tomorrow. - Robert Tew",
      "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "Good decisions come from experience, but experience comes from making bad decisions. - Mark Twain",
      "One is always a noob when it comes to learning new things. -- nooberthanyou",
    ];
    const selectedMessage =
      storedMessagesArr[Math.floor(Math.random() * storedMessagesArr.length)];
    client.say(channel, `${selectedMessage}`);
  },
};
