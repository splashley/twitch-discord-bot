// Bot Information
require("dotenv").config();
const { QuickTwitchBot } = require("quick-chat-bot");
const path = require("path");
const bot = new QuickTwitchBot({
  username: "splashleybot",
  password: process.env.TWITCH_PASSWORD,
  channel: "splashley",
  commandsDir: path.join(__dirname, "commands"),
});
bot.connect();
