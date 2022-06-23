<template>
  <div class="header">
    <h2>TodoList 代办事项</h2>
    <input type="text" placeholder="请输入您的代办事项，按回车键确认" >
  </div>
</template>

<script>
// 引入 nanoid ,nanoid 为分别暴露
// import {nanoid} from "nanoid"
</script>

<style lang="less" scoped>
div.header {
  input {
    width: 475px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 3px;
  }
  h2 {
    color: #494949;
    margin-bottom: 10px;
  }
}
</style>
