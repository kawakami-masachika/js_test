var myChild = {
  template: '<p>子: 年齢{{age}}才</p>',
  props:[]
};

var myName = {
  data: function(){
    return {
      age: 10,
      name: 'たかし',
      num: 1210
    }
  },
  components: {
    'my-child': myChild
  },
  template: "<p>親  名前:{{name}} 学籍番号:{{num}} 年齢{{age}}才<br><my-child v-bind:age='age'></my-child></p>"
};

var app = new Vue({
  el: '#app',
  components: {
    'my-name' : myName
  }
});