

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    now: new Date()
  },
  methods: {
    updateDate() {
      this.now = new Date();
    }
  },
  mounted() {
    setInterval(() => {
      this.updateDate();
    }, 1000);
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
  
})