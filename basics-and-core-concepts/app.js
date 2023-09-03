const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/',
      counter: 0,
      name: 'Ted',
    };
  },
  methods: {
    setName(e, someName) {
      this.name = e.target.value + ' ' + someName + ' ' + anotherName;
    },
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return '<h1>Master React!</h1>';
      } else {
        return '<h1>Master Vue!</h1>';
      }
    },
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
  },
});

app.mount('#user-goal');
