var moduleA = (function () {
  // 导出对象
  var obj = {}

  var name = '小明'
  var age = 22

  function sum(num1, num2) {
    return num1 + num2
  }

  var flag = true
  if (flag) {
    console.log(sum(100, 22));
  }

  obj.flag = flag;
  obj.sum = sum;
  return obj
})()

// var name = '小明'
//   var age = 22

//   function sum(num1, num2) {
//     return num1 + num2
//   }

//   var flag = true
//   if (flag) {
//     console.log(sum(100, 22));
//   }

//   module.expoerts = {
//     flag,
//     sum
//   }