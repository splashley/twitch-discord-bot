const { db } = require("../firebase");
const docRef = db.collection("WaterRefill").doc("state");

module.exports = {
  text: "!refill",
  callback: (channel, tags, message, self, client) => {
    // Get refill count from database
    const getRefillCount = async () => {
      const refillCountData = await docRef.get();
      return refillCountData.exists ? refillCountData.data() : null;
    };
    // Add additional refill amount to database
    const setRefillCount = async (data) => {
      const resData = await docRef.set(data);
      return resData;
    };
    // if command is !refill reset, the count should be set to 0
    const parse = message.slice(1).split(" ");
    if (parse[1] === "reset") {
      setRefillCount({
        refillCount: 0,
      });
    } else {
      // Add +1 refill count then push it to setRefillCount
      const addRefill = async () => {
        const { refillCount } = await getRefillCount();
        setRefillCount({
          refillCount: refillCount + 1,
        });
        sendChatMessage();
      };

      const sendChatMessage = async () => {
        const { refillCount } = await getRefillCount();
        client.say(
          channel,
          `splashley has refilled her water bottle ${refillCount} times!`
        );
      };

      addRefill();
    }
  },
};
