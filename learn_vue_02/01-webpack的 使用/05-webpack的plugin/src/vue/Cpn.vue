<template>
  <div>
    <h2>我是CPN组件的标题</h2>
    <p>我是CPN组件的内容，哈哈哈哈哈</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Cpn',
  data() {
    return {
      name: '我是CPN'
    }
  }
}
</script>

<style>
</style>
