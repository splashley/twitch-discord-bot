module.exports = {
  text: "!socials",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "Twitter: https://twitter.com/splashleycodes | Instagram: https://instagram.com/splashleyonline | TikTok: https://www.tiktok.com/@splashleyonline"
    );
  },
};
