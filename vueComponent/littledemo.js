// 所有的 Vue.js 组件其实都是被扩展的 Vue 实例
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})
