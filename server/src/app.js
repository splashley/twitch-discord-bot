// Bot Information
require("dotenv").config();
const { ApiClient } = require('twitch');
const { ClientCredentialsAuthProvider } = require('twitch-auth');
const { ConnectionAdapter, DirectConnectionAdapter, EventSubListener } = require('twitch-eventsub');

const clientId = process.env.TWITCH_CLIENTID;
const clientSecret = process.env.TWITCH_CLIENTSECRET;

const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

const notificationUri = process.env.notificationUri;

class StaticAdapter extends ConnectionAdapter {
  constructor(uri, port) {
    super();
    this.uri = uri;
    this.port = port;
  }

  get connectUsingSsl()  {
    return true;
  }

  async getListenerPort() {
    return this.port;
  }

  async getExternalPort() {
    return 443;
  }

  async getHostName() {
    return this.uri;
  }
}

const listenerFunction = async function() {
  const listener = new EventSubListener(apiClient,
    new StaticAdapter(notificationUri, serverPort),
    signingSecret);
    await listener.listen();
}

listenerFunction();

const { QuickTwitchBot } = require("quick-chat-bot");
const path = require("path");
const bot = new QuickTwitchBot({
  username: "splashleybot",
  password: process.env.TWITCH_PASSWORD,
  channel: "splashley",
  commandsDir: path.join(__dirname, "commands"),
});

bot.connect();
