module.exports = {
  text: "!test",
  callback: (channel, tags, message, self, client) => {
    const storedMessagesArr = [
      "The Discord will be ready soon, stay tuned!",
      "Play the drop game by typing in the command !drop with an emote of your choice.",
      "For 1500 channel points, you can bet with other watchers whether Splashley will have a bad or good jellybean.",
    ];

    if (tags.username === "splashley") {
      setInterval(() => {
        const selectedMessage =
          storedMessagesArr[
            Math.floor(Math.random() * storedMessagesArr.length)
          ];
        client.say(channel, `${selectedMessage}`);
      }, 900000);
    } else {
      client.say(channel, "Sorry, only Splashley can run this command.");
    }
  },
};
