const { default: axios } = require("axios");
const ID = process.env.SPOTIFY_CLIENTID;
const SECRET = process.env.SPOTIFY_CLIENTSECRET;
const authBuffer = Buffer.from(`${ID}:${SECRET}`).toString("base64");

module.exports = {
  text: "!music",
  callback: (channel, tags, message, self, client) => {
    axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: { Authorization: `Basic ${authBuffer}` },
      params: {
        grant_type: "refresh_token",
        refresh_token: process.env.SPOTIFY_AUTH_REFRESH_TOKEN,
      },
    }).then(({ data: { access_token } }) => {
      axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me/player/currently-playing?",
        headers: { Authorization: "Bearer " + access_token },
      }).then(({ statusText, data: { item } }) => {
        const message = `catJAM Currently listening to ${item.name} by ${item.artists[0].name} - ${item.external_urls.spotify}`;
        if (statusText === "No Content")
          client.say(channel, "No music playing");
        else client.say(channel, message);
      });
    });
  },
};
