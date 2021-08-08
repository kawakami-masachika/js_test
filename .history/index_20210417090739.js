var app =  new Vue({
  el: "#app",
  data: {
    animal_list: ["犬", "猿", "きじ"],
    message: "hello world",
    item:{
      name: "まさ",
      price: 100,
    },
    amount: 2
  },
  computed:{
    sumPrice: function(){
      return this.price * 
    }
  }
})