// Spotify API Call
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENTID,
  clientSecret: process.env.SPOTIFY_CLIENTSECRET,
  scope: ["user-read-currently-playing"],
});

module.exports = musicCommand = {
  text: "!music",
  callback: (channel, tags, message, self, client) => {
    spotifyApi.clientCredentialsGrant().then(
      function (data) {
        console.log("The access token is " + data.body["access_token"]);
        console.log("The token expires in " + data.body["expires_in"]);
        spotifyApi.setAccessToken(data.body["access_token"]);
      },
      function (err) {
        console.log(
          "Something went wrong when retrieving an access token",
          err
        );
        client.say(channel, `${err} :'(`);
      }
    );
    spotifyApi.getMyCurrentPlayingTrack().then(
      function (data) {
        console.log("Now playing: " + data.body.item.name);
        const currentSongName = data.body.item.name;
        client.say(channel, `I'm currently listening to ${currentSongName}`);
      },
      function (err) {
        console.log("Something went wrong!", err);
        client.say(channel, `${err} :'(`);
      }
    );
  },
};
