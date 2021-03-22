module.exports = {
  text: "!test",
  callback: (channel, tags, message, self, client) => {
    const storedMessagesArr = [
      "The Discord will be ready soon, stay tuned!",
      "Play the drop game by typing in the command !drop with an emote of your choice.",
      "For 1500 channel points, you can bet with/against other watchers on whether Splashley will chew on a bad or good jellybean.",
      "Play the WordGame! Type !wordgame to start!",
    ];

    if (tags.username === "splashley") {
      setInterval(() => {
        const selectedMessage =
          storedMessagesArr[
            Math.floor(Math.random() * storedMessagesArr.length)
          ];
        client.say(channel, `${selectedMessage}`);
      }, 90000);
    } else {
      client.say(channel, "Sorry, only Splashley can run this command.");
    }
  },
};
