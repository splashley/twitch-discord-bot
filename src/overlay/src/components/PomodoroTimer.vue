<template>
  <div class="pomodoro-wrapper">
    <p v-for="(countdown, index) in pomodoro" :key="index">
      {{ pomodoro.countdown }}
    </p>
    <p>THIS IS THE COUNTDOWN!!</p>
  </div>
</template>

<script>
import { pomodoroTimer } from "../firebase";
export default {
  data() {
    return { tasks: null };
  },
  methods: {
    getCountdown() {
      pomodoroTimer.where("active", "==", true).onSnapshot((querySnapshot) => {
        let pomodoro = [];
        querySnapshot.forEach((doc) => {
          pomodoro.push({
            active: doc.data().active,
            countdown: doc.data().countdown,
          });
        });
        this.pomodoro = pomodoro;
      });
    },
  },

  async mounted() {
    this.getCountdown();
  },
};
</script>

<style>
.pomodoro-wrapper {
  width: 100%;
  margin: 0;
  top: 0;
  position: absolute;
color: white;
  height: 100px;
}
</style>