const { db } = require("../firebase");
const authorized = require("./authorized");

const overlayCollection = db.collection("overlays");

module.exports = {
  text: "!confetti",
  callback: (channel, tags, message, self, client) => {
    if (!authorized.includes(tags.username)) {
      client.say(channel, "Sorry, only Splashley + mods can do shoutouts");
    } else {
      overlayCollection
        .doc("state")
        .get()
        .then(function (doc) {
          console.log(doc.data());
          if (doc.exists) {
            return doc.ref.update({ active: !doc.data().active });
          } else {
            console.log("error!");
          }
        })
        .then(function () {
          console.log("yay this works!");
        })
        .catch(function (error) {
          console.log(error + "error send help!!!");
        });
    }
  },
};
