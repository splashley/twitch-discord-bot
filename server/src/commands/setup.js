module.exports = {
  text: "!setup",
  callback: (channel, tags, message, self, client) => {
    client.say(
      channel,
      "CPU: i5-3350P CPU @ 3.10GHz | GPU: NVIDIA GeForce GTX 1650 | RAM: 16GB | MIC: MAONO AU-A04 | KEYBOARD: Redragon K582 | MOUSE: Redragon M602 | CAM: SONY A6000 W/ SIGMA 16MM F/1.4 LENS"
    );
  },
};
