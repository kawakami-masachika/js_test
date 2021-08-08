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
      var ids = this

      // var max_id = ids.reduce(function(a, b) {
      //   return Math.max(a, b);
      // });
      // var name = this.$refs.name.value //追加！

      // addMember: function(){
      //   this.team.push(
      //     {name: name,id:max_id + 1} //ななしをnameに変更
      //     );
      // }
    }
})