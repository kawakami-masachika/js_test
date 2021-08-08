var app = new Vue({
  el: '#app',
  data: {
    team: [
        { name: "たかし", id:1 },
        { name: "あきら", id:2 },
        { name: "つとむ", id:3 }
      ]
  },
  methods: {
    
    var max_id = ids.reduce(function(a, b){
      addMember: function(){
        var ids = this.team.map(function(member){
          return member.id;
        });
      return Math.max(a, b)
    });
    
    this.team.push(
      {name: 'ななし',id: max_id + 1}
      )
    }
  }
})