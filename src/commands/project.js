module.exports = {
  text: "!project",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "I'm building out a landing page as a cover letter for a job I want to apply to. Using react.js!"
    );
  },
};
