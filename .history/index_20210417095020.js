var app =  new Vue({
  el: "#app",
  data: {
    egg_status: "半熟",
    message: "....."
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
      }, 1000);
    }
  }
})