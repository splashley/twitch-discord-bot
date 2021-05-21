// const authorized = require("./authorized");
// const OBSWebSocket = require("obs-websocket-js");
// const obs = new OBSWebSocket();

// module.exports = {
//   text: "!catparty",
//   callback: (channel, tags, message, self, client) => {
//     obs
//       .connect({
//         address: "localhost:4444",
//         password: process.env.OBS_PASSWORD,
//       })
//       .then(() => {
//         console.log(`Success! We're connected & authenticated.`);

//         return obs.send("GetSceneList");
//       })
//       .then((data) => {
//         console.log(`${data.scenes.length} Available Scenes!`);

//         data.scenes.forEach((scene) => {
//           if (scene.name !== data.currentScene) {
//             console.log(
//               `Found a different scene! Switching to Scene: ${scene.name}`
//             );

//             obs.send("SetCurrentScene", {
//               "scene-name": scene.name,
//             });
//           }
//         });
//       })
//       .catch((err) => {
//         // Promise convention dicates you have a catch on every chain.
//         console.log(err);
//       });
//     // const parse = message.slice(1).split(" ");
//     // const streamerName = parse.splice(1);
//     // if (authorized.includes(tags.username)) {
//     //   client.say(
//     //     channel,
//     //     `pepeD Check out ${streamerName}! Their Twitch is www.twitch.com/${streamerName} pepeD`
//     //   );
//     // } else {
//     //   client.say(channel, "Sorry, only Splashley can do shoutouts");
//     // }
//   },
// };
