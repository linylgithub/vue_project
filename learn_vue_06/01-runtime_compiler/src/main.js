// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// const cpn = {
//   template: '<div>{{message}}</div>',
//   data: () => ({
//     message: '我是组件Message'
//   })
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  // render: function(h) {
  // return h(App)
  // }
  // render: (createElement) => createElement('h2',
  // { class: 'box' },
  // ['Hello World', createElement('button', ['按钮'])])
  // ['Hello World', createElement(cpn)])
  render: (h) => h(App)
})

// runtime-complier V1
// template -> ast(抽象语法树abstract syntax tree) -> render -> vdom -> UI
// runtime-only V2 性能更高, 代码量更少
// render -> vdom -> UI
