const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return '<h1>Master React!</h1>';
      } else {
        return '<h1>Master Vue!</h1>';
      }
    },
  },
});

app.mount('#user-goal');
