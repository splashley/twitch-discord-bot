module.exports = {
  text: "!test",
  callback: (channel, tags, message, self, client) => {
    const storedMessagesArr = [
      "Our Discord https://discord.gg/KnpFyeUtzx is now LIVE! Come join us and chat about anything from web dev to gaming!",
      "!drop klassy3Drop",
      "Play the drop game by typing !drop with an emote of your choice. Hit 100 and become VIP",
      "For 1000 channel points, you can bet with/against other watchers on whether Splashley will chew on a bad or good jellybean.",
      "Play the WordGame! Type !wordgame to start!",
      "Thank you so much for watching this stream <3 It means a lot to me to have you here.",
      "Splashley is now on Instagram! Go follow at www.instagram.com/splashleyonline",
      "Need some positive words of encouragement? Type !positive",
      "Guess the number! Type !guessnumber to start!",
      "Backseat programming is allowed but can get a bit overwhelming if too many people are helping at once!",
      "Play Rock, Paper, Scissors! eg: !rps rock",
      "Curious about the chat overlay? It's made possible by the one and only @cmgriffing at https://streamparrot.com/",
      "!drop splash86Hydrate ",
    ];

    if (tags.username === "splashley") {
      setInterval(() => {
        const selectedMessage =
          storedMessagesArr[
            Math.floor(Math.random() * storedMessagesArr.length)
          ];
        client.say(channel, `${selectedMessage}`);
      }, 400000);
    } else {
      client.say(channel, "Sorry, only Splashley can run this command.");
    }
  },
};
