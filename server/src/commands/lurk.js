module.exports = {
  text: "!lurk",
  callback: (channel, tags, message, self, client) => {
    const lurker = tags.username;
    client.say(
      channel,
      `/me Enjoy your lurk ${lurker} Thanks for supporting the stream peepoLurking peepoLurking peepoLurking`
    );
  },
};
