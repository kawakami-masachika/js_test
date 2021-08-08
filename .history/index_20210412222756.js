var myName = {
  template: '<p>私の名前はたかしです。</p>'
}

var myBu

// Vue.component('MyName', {
//   template: '<p>私の名前はたかしです。</p>'
// });

var app = new Vue({
  el: '#app',
  components: {
    'my-name': myName
  }
});