module.exports = {
    text: "!codethesaurus",
    callback: (channel, tags, message, self, client) => {
      client.say(
        channel,
        "Created by @GeekyGirlSarah, Code Thesaurus is a system that allows you to compare structures of programming languages side-by-side in an easy to learn way. Check it out here https://codethesaur.us/"
      );
    },
  };
  