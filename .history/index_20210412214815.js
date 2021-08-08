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
    console.log(this.$el);
    console.log('mounted');
  },
  beforeUpdate: function(){
    alert('beforeUpdate count =' + this.count)
    console.log('mounted');
  },
  updated: fu

})