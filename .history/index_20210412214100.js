var app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  methods: {
    addMember: function(){
      var ids = this.team.map(function(member){
        return member.id;
      });
    var max_id = ids.reduce(function(a, b){
      return Math.max(a, b)
    });
    var name = this.$refs.name.value //追加！
    
    this.team.push(
      {name: name ,id: max_id + 1}
      )
    }
  }
})