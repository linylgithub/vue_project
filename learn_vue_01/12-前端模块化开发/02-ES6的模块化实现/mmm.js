import {flag, sum} from './aaa.js'

if (flag) {
    console.log('小明是天才');
    console.log(sum(100, 22));
}

import {num1, height, mul, Person} from './aaa.js'

console.log(num1);
console.log(height);

console.log(mul(num1, height));

const p = new Person();
p.run()

import addr from './aaa.js'
addr('ddddddd')

import * as aaa from './aaa.js'


// 5 统一全部导入
console.log(aaa.num1);