var app = new Vue({
  el: '#app',
  data: {
    count: 0
  },

  beforeCreate: function(){
    console.log('beforeCreate : this.$data=' +this.data)
  }
})