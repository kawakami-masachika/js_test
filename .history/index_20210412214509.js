var app = new Vue({
  el: '#app',
  data: {
    count: 0
  },

  beforeCreate: function(){
    console.log('beforeCreate : this.$data=' +this.$data);
  },
  created: function(){
    console.log('created : this.$data' + this.$data)
  },
  beforeMount: function(){
    console.log('beforeMount');
    console.log(this.$el); 
  },
  mounted: function(){
    console.log
  }
})