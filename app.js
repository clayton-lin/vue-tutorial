new Vue({
  el: '#vue-app',
  data: {
    name: 'Tom',
    sigh: 'Fool'
  },
  methods: {
    greet: function(greeting) {
      return `Good ${greeting} ${this.name}`;
    }
  }
});

