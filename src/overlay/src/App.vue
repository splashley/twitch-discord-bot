<template>
  <div id="overlay"></div>
</template>

<script>
import { overlayCollection } from "./firebase";
import Vue from "vue";
import VueConfetti from "vue-confetti";
Vue.use(VueConfetti);
export default {
  name: "App",
  data() {
    return {
      state: undefined,
    };
  },
  mounted() {
    this.connectToDB();
  },
  watch: {
    state(val) {
      if (val === undefined) return;
      if (val) this.startConfetti(3500);
    },
  },
  methods: {
    connectToDB() {
      overlayCollection
        .doc("state")
        .onSnapshot((doc) => (this.state = doc.data()));
    },
    startConfetti(ms) {
      this.$confetti.start({
             particles: [
            {
              type: 'heart',
            },
            {
              type: 'circle',
            },
          ],
          defaultColors: [
            'red',
            'pink',
            '#BDA0CB',
            '#68228B',
            '#FFBBFF',
            "#FEDE00"

          ],
          defaultDropRate: 20, particlesPerFrame: 4
      });
      setTimeout(() => {
        this.$confetti.stop();
        overlayCollection.doc("state").set({ active: false });
      }, ms);
    },
  },
};
</script>

<style>
* {
  margin: 0 !important;
}
#overlay {
  height: 100vh;
  width: 100vw;
}
</style>