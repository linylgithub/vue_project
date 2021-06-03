<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
data() {
    return {
      message: '你好啊',
      name: 'Joh'
    }
  },
  methods: {
    btnClick() {
      console.log('hi vue!');
    }
  },
  components: {
    Cpn
  }
}
</script>

<style>
 .title {
   color: chartreuse;
 }
</style>