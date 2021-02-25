// Spotify API Call
const musicCommand = require("./commands/music");

var SpotifyWebApi = require("spotify-web-api-node");

var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENTID,
  clientSecret: process.env.SPOTIFY_CLIENTKEY,
  redirectUri: "http://www.example.com/callback",
});
