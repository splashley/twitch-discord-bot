module.exports = {
  text: "!about",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "My name is Ashley and I stream primarily web development. From time to time I'll stream some gaming and small studying sessions. I'm a proud cat mom of six. I work full-time and go to university part-time for Business Technology Management. More can be read in my About me section."
    );
  },
};
