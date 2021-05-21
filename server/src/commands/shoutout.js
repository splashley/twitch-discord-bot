const authorized = require("./authorized");

module.exports = {
  text: "!so",
  callback: (channel, tags, message, self, client) => {
    function handleStreamerName(streamerName) {
      const containsHandle = message.slice(1).split(" ");
      const createStreamerName = containsHandle.splice(1)[0];
      if (createStreamerName.charAt(0) == "@") {
        let streamerName = createStreamerName.replace("@", "");
        sendShoutout(streamerName);
      } else {
        sendShoutout(createStreamerName);
      }
    }

    function sendShoutout(streamerName) {
      if (!authorized.includes(tags.username)) {
        client.say(channel, "Sorry, only Splashley + mods can do shoutouts");
      } else {
        switch (streamerName.toLowerCase()) {
          case "klassykat":
            client.say(
              channel,
              `pepeD Check out THE ONE AND ONLY KLASSYKAT! Their Twitch is www.twitch.com/${streamerName} pepeD`
            );
            break;
          case "odatnurd":
            client.say(
              channel,
              `pepeD Check out the Sublime KING! Their Twitch is www.twitch.com/${streamerName} pepeD`
            );
            break;
          case "codeinpublic":
            client.say(
              channel,
              `pepeD Check out the Leetcode KING! Their Twitch is www.twitch.com/${streamerName} pepeD`
            );
            break;
          default:
            client.say(
              channel,
              `pepeD Check out ${streamerName}! Their Twitch is www.twitch.com/${streamerName} pepeD`
            );
        }
      }
    }
    handleStreamerName();
  },
};
