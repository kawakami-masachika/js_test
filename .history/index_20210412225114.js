var myChild = {
  template: '<p>子:</p>'
};

var myName = {
  data: function({
    return
  })
  components: {
    'my-child': myChild
  },
  template: '<p>親です！<br><my-child></my-child></p>'
};

var app = new Vue({
  el: '#app',
  components: {
    'my-name': myName
  }
});