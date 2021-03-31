var name = '小明'
var age = 18
var flag = true


function sum(num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 30));
}

// 1 导出方式
export { 
    flag,
    sum
}

// 2 导出方式

export var num1 = 1000
export var height = 1.97


// 3 导出函数/类

export function mul(num1, num2) {
    return num1 - num2
}

export class Person {
    run() { console.log('在奔跑');}
}

// 4 export default 
// const address = '成都市';
// export default address

export default function (arg) {
    console.log(arg);
}

