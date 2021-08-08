var app =  new Vue({
  el: "#app",
  data: {
    egg_status: "半熟"
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
        vm.message = 'か'
      })
    }
  }
})