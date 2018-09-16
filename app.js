new Vue({
  el: '#vue-app',
  data: {
    name: 'Tom',
    sigh: 'Fool',
    website: 'https://google.com',
    websiteTag: '<a href="https://google.com">Google Link</a>'
  },
  methods: {
    greet: function(greeting) {
      return `Good ${greeting} ${this.name}`;
    }
  }
});

