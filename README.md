# My Twitch/Discord Bot (Updated frequently)
Using the quick-chat-bot library and primarily node.js, I created interactive custom commands for my Twitch bot.

## How It's Made:

**Tech used:** Node.js, [quick-chat-bot](https://www.npmjs.com/package/quick-chat-bot), Spotify API, Vue.js, Firebase, Vue Confetti

## Lessons Learned:
- Learned how to setup Firebase for the first time because the app required a database to store some data. This includes setting Firebase up on the front and backend. 
- Created an in-chat game (on Twitch) where users are shown a random scrambled word from my bot, and the first user to correctly figure out the word gets a point added to their username in a high-score collection I've setup in Firebase.
- Use nodemon to always have your server update after saving a file rather than always restarting your server manually.
- Recently added Vue.js for frontend to add visuals when specific commands are used. 
- Setup Vue Confetti for the first time to create a confetti effect on a browser source when a specific command is used.
- Integrated Spotify API to allow users to find out what current song is playing by entering a specific command.
- Created a guessing number game for users, once a command is used the bot stores a random number between 1 and 100 in Firebase. Users (chatters) then have to guess what the number is. The bot communicates to the users whether their guess is correct or not. Once the correct answer is guessed, a new random number is selected and is updated in Firebase.
