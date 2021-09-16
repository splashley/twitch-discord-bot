<template>
  <div class="task-management-bar">
    <ul class="task-management-text">

      <li>👩‍💻 Want to co-work? Enter !task for more info 👨‍💻</li>
      <li class="item" v-for="(task, index) in tasks" :key="index">
        👩‍💻 {{ task.id }}: {{ task.task }} 👨‍💻
      </li>
    </ul>
  </div>
</template>

<script>
import { taskManagement } from "../firebase";
export default {
  data() {
    return { tasks: null };
  },
  methods: {
     getTasks() {
      taskManagement
        .where("active", "==", true)
        .onSnapshot((querySnapshot) => {
          let tasks = [];
          querySnapshot.forEach((doc) => {
            tasks.push({
              id: doc.id,
              active: doc.data().active,
              task: doc.data().task,
            });
          });
          this.tasks = tasks
        })
      }
  },

  async mounted() {
    this.getTasks()
  },
};
</script>

<style>
.task-management-bar {
  display: flex;
  font-family: 'Poppins', sans-serif;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  height: 50px;
  width: 100%;
  background-color: #72657a90;
  overflow: hidden;
}

.task-management-text {
  color: white;
  font-size: 1.5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 50px;
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  -moz-animation: my-animation 60s linear infinite;
  -webkit-animation: my-animation 60s linear infinite;
  animation: my-animation 60s linear infinite;
}

.item {
  display: flex;
  flex: 1;
}

@-moz-keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
  }
}

@-webkit-keyframes my-animation {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.task-management-text li {
  list-style-type: none;
}
</style>