const app = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "《算法导论》",
        date: "2006-9",
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "《UNIX编程艺术》",
        date: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: "《编程珠玑》",
        date: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: "《代码大全》",
        date: "2006-3",
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    // getFinalPrice(price) {
      // return '￥' + price.toFixed(2)
    // }
    increment(index) {
      this.books[index].count ++
      console.log('increment');
    },
    decrement(index) {
      console.log('decrement');
      if (this.books[index].count > 1){
        this.books[index].count --;
      }
    },
    removeHandler(index) {
      console.log(index);
      this.books.splice(index, 1);
    }
  },
  filters: { 
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      // for(let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i]. count * this.books[i].price
      // }
      // for(let i in/of this.books)
      // for(let i in this.books){
      //   totalPrice += this.books[i]. count * this.books[i].price
      // }
      // for(let book of this.books){
      //   totalPrice += book.count * book.price
      // }
      // return totalPrice
      // reduce
    // let total2 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
    // totalPrice = this.books.reduce((pre, n) => pre + n.count * n.price);
    // console.log(totalPrice);
    // return 100
      return this.books.reduce(function(total, book){
        return total + book.price * book.count
      }, 0)
  
    }
  }
})


// 编程范式：命令式编程/声明编程
// 面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// 取出所有小于100的数字
// 将所有小于100的数字进行转化：全部*2
// 将所有new2Nums数字相加，得到最终结果\
// filter中的回调函数有一个要求：必须返回一个boolean
const nums = [20, 20, 30, 40, 50, 60, 70, 80, 100, 110, 120]
// filter的使用
// let newNums = nums.filter(function (n){
//   return n < 100
// })
// console.log(newNums);
// // map的使用
// let newNums2 = newNums.map(function (n){
//   return n * 2
// })
// console.log(newNums2);
// let sum = newNums2.reduce(function (total, n){
//   return total + n
// }, 0)
// console.log(sum)
let total = nums.filter(function (n){
  return n < 100
}).map(function (n){
  return n * 2
}).reduce(function (total, n){
  return total + n
}, 0)
console.log(total);
let total2 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(total2);
