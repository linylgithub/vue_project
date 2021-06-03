const { add, mul } = require('./js/mathUtils.js')


console.log(add(20, 30));
console.log(mul(20, 30));

import { name, age, height } from './js/info';

console.log(name);
console.log(age);
console.log(height);


// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊，VUE</h2>')

// webpack
// npm install webpack@3.6.0

// css-loader
// npm install css-loader@2.0.2 --save-dev

// style-loader
// npm install style-loader@0.23.1 --save-dev

// less-loader
// npm install --save-dev less-loader@4.1.0 less@3.9.0

// url-loader
// npm install --save-dev url-loader@1.1.2

// npm uninstall --save-dev file-loader@3.0.1

// es6转换成es5
// npm install --save-dev babel-loader@7.1.5 babel-core@6.26.3 babel-preset-es2015@6.24.1

// Vue
// npm install vue@2.5.21 --save

//npm install vue-loader@15.4.2 vue-template-compiler@2.5.21 --save-dev


// 使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: "#app",
  template: '<App/>',
  components: {
    App
  }
})

// document.writeln("<button>按钮</button>")