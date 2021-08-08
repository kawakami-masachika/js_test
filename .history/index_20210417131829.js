
// コンポーネント
// グローバルなコンポーネント登録
Vue.component('MyName',{
  template: '<p>私の名前はたかしです！</p>'
});


var myChild = {

  template: '<p>子:　年齢{{age}}才</p>',
  props:['age']

};

var myName = {
  data: function () {
    return {
      age: 10,
      name: 'たかし',
      num: 1210
    }
  },
  components: {
    'my-child': myChild
  },

  template: '<p>親　　名前:{{name}} 学籍番号:{{num}} 年齢:{{age}}才<br>\
  <my-child v-bind:age="age"></my-child></p>'
};


// ローカル登録
var myLastName = {
  template: '<p>私の名前はマサチカです</p>'
}

var Mybutton = {
  data: function(){
    return{
      count: 0
    }
  },
  template: '<button v-on:click="count++">{{count}}</button>'
}

var app =  new Vue({
  el: "#app",
  data: {
    egg_status: "半熟",
    message: ".....",
    flg: true,
    render_list: [
      {id: 1, category: "カテゴリー1"},
      {id: 2, category: "カテゴリー2"},
      {id: 3, category: "カテゴリー3"},
    ]
  },
  computed: {
    checkEgg: function(){
      if(this.egg_status == '完熟'){
        return '焼けたよ';
      }else{
        return 'まだだよ'
      }
    }
  },
  watch: {
    egg_status: function(){
      var vm = this;
      setTimeout(function(){
        vm.message = '変更完了'
      }, 3000);
    }
  },
  methods:{
    addMember: function(){
      var ids = this.render_list.map(item => item['id'])
      var maxId = ids.reduce((a,b)=> Math.max(a,b));
      this.render_list.push(
        {category: "カテゴリーなし", id: maxId + 1}
      )
    },
  },
  components: {
    'my-lastname': myLastName,
    'my-button': Mybutton,
    'parent':myName
  }
})
