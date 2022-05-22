<script>
import {ref} from "vue";

export default {
  name: 'App',
  // 数据和函数包裹在 setup() 中
  setup(){
    // 基本数据类型用 ref() 定义 , 返回一个 ref 类型的对象
    const name = ref('小丁')
    const age = ref(18)
    const job = ref({
      type: '前端工程师',
      salary: '20k'
    })
    function setInfo() {
      // 修改数据不用 this , 要用 xxx.value
      name.value = '小锋'
      age.value = 19
      job.value.salary = '30k'
    }
    // 定义的变量和函数需要返回
    return {
      name, age, setInfo, job
    }
  }
}
</script>

<template>
  <h1>你好</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h3 v-for="(j, index) in job" :key="index">{{j}}</h3>
  <button @click="setInfo">点我点我</button>
</template>

<style>
</style>
