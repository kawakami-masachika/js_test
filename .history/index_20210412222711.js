var myName = {
  template: '<p>私の名前はたかしです。</p>'
}

Vue.component('MyName', {
  template: '<p>私の名前はたかしです。</p>'
});

var app = new Vue({
  el: '#app',
  components: {
    'my-name': 
  }
});