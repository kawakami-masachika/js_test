var app =   new Vue({
  el: '#app',
  data:{
    todolists:[
      {id:1, content:"歯磨き", isComplete: false},
      {id:2, content:"買い物", isComplete: false},
      {id:3, content:"勉強", isComplete: false}
    ]
  },
  methods: {
    addTask: function(){
      var new = this.$refs.new_content.value;
    }
  }
});