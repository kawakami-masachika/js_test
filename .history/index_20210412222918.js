var myName = {
  template: '<p>私の名前はたかしです。</p>'
}

var myButton = {
  data: function(){
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">'
}


// Vue.component('MyName', {
//   template: '<p>私の名前はたかしです。</p>'
// });

var app = new Vue({
  el: '#app',
  components: {
    'my-name': myName
  }
});