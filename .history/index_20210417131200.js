
// コンポーネント
// グローバルなコンポーネント登録
Vue.component('MyName',{
  template: '<p>私の名前はたかしです！</p>'
});

var parent ={
  data: function(){
    return{
      age: 10,
      name:'マシュー',
      number: 1200
    }
  },
  components:{
    'my-child': myChild
  },
  template: '<my-child v-bind:age=></my-child>'
};

var child = {
  template: '<p>子： 年齢{{age}}才<parent></parent></p>',
  props:['age']
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
    'child':child
  }
})
