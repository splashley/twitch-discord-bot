const firebase = require("../firebase");
const authorized = require("../authorized");

module.exports = {
  text: "!task",
  callback: (channel, tags, message, self, client) => {
    const username = tags.username.toLowerCase();
    const messageSplit = message.split(" ");
    let action = messageSplit[1];
    let onlyMsg = messageSplit.slice(2, messageSplit.length);
    let deleteUser = messageSplit.slice(2, messageSplit.length);
    let taskHandler = onlyMsg.join(" ").toLowerCase();

    if (taskHandler.length > 50) {
      client.say(
        channel,
        `Hey ${username}, your task is too long. Keep it under 50 characters.`
      );
    } else {
      switch (action) {
        case "remove":
          if (!authorized.includes(tags.username)) {
            client.say(
              channel,
              "Sorry, only Splashley + mods can remove tasks"
            );
          } else {
            let username = deleteUser[0];
            console.log("deleteUser", username);
            firebase.deleteTask({ username });
            client.say(
              channel,
              `Hey ${username}, ${deleteUser}'s task has been deleted!`
            );
          }
          break;
        case "delete":
          firebase.deleteTask({ username });
          client.say(channel, `Hey ${username}, your task has been deleted!`);
          break;
        case "me":
          firebase.getTask({ username }).then((res) => {
            if (!res.task) {
              client.say(
                channel,
                `Hey ${username}, you currently have no task! Type !task add enter your task to add your task!`
              );
            } else {
              client.say(
                channel,
                `Hey ${username}, your current task is ${res.task}`
              );
            }
          });
          break;
        case "view":
          let cleanUsername = taskHandler.startsWith("@")
            ? taskHandler.substring(1)
            : taskHandler;
          firebase.getTask({ username: cleanUsername }).then((res) => {
            if (!res?.task)
              client.say(channel, `${taskHandler} currently has no task!`);
            else {
              client.say(
                channel,
                `Hey ${username}, ${taskHandler}'s current task is ${res.task}`
              );
            }
          });
          break;
        default:
          firebase.setTask({ username, task: taskHandler });
          console.log(username);
          client.say(
            channel,
            `Hey ${username}, your task has been added! Happy Co-Working! Type !task delete to delete your task`
          );
      }
    }
  },
};
