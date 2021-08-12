import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: "twitchwordgame.firebaseapp.com",
  projectId: "twitchwordgame",
  storageBucket: "twitchwordgame.appspot.com",
  messagingSenderId: "826647704969",
  appId: "1:826647704969:web:77b1105a155656c0339d58",
};
const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.firestore();
export const overlayCollection = db.collection("overlays");
const taskManagement = db.collection("TaskManagement");

export const getTasks = async () => {
  let tasks = [];
  let activeTasks = await taskManagement.where("active", "==", true).get();
  activeTasks.forEach((doc) => {
    tasks.push({
      id: doc.id,
      active: doc.data().active,
      task: doc.data().task,
    });
  });
  return tasks;
}
