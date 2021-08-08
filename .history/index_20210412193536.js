var app = new Vue({
  el: '#app',
  data: {
    count:0
  },
  methods:{
    addCount: function(){
      // countのみでは参照出来ない
      this.count +=1;
    }
  }
})