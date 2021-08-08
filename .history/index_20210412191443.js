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
    addMember: function(){
      this.team.push(
        {name: "ななし", id:4}
      );

    }
  }
})