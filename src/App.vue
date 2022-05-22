<script>
import {ref, reactive} from "vue";

export default {
  name: 'App',
  // 数据和函数包裹在 setup() 中
  setup(){
    // 基本数据类型用 ref() 定义 , 返回一个 ref 对象
    const name = ref('小丁')
    const age = ref(18)
    // 引用数据类型用 reactive() 定义 , 返回一个 Proxy 对象
    const job = reactive({
      type: '前端工程师',
      salary: '20k',
      a: {
        b: {
          c: 666
        }
      }
    })
    const hobby = reactive(['抽烟', '喝酒', '开车'])

    function setInfo() {
      // 修改 ref 定义的变量数据要用 .value
      name.value = '小锋'
      age.value = 19
      // 修改 reactive 定义的对象属性不用 .value
      job.salary = '30k'
      job.a.b.c = 999
      // 因为监测数据变化和 Vue2 不同 , 所以直接通过数组下标修改值也可以监测
      hobby[0] = '学习'
    }
    // 定义的变量和函数需要返回
    return {
      name, age, setInfo, job, hobby
    }
  }
}
</script>

<template>
  <h1>你好</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h3>a的值： {{job.a.b.c}}</h3>
  <h3>爱好： {{hobby}}</h3>
  <h3 v-for="(j, index) in job" :key="index">{{j}}</h3>
  <button @click="setInfo">点我点我</button>
</template>

<style>
</style>
