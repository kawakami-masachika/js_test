
// コンポーネント
// グローバルなコンポーネント登録
Vue.component('MyName',{
  template: '<p>私の名前はたかしです！</p>'
});

// ローカル登録t

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
  }
})
