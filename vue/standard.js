var app = new Vue({
  el: '#app',
  data: {
    message: 'Hellow Vue'
  }
})
var app2 = new Vue({
  el: '#app2',
  data: {
    message: '页面加载于' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})
