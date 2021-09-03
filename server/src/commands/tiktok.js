module.exports = {
    text: "!tiktok",
    callback: (channel, tags, message, self, client) => {
      client.say(channel, "https://www.tiktok.com/@splashleyonline");
    },
  };
  