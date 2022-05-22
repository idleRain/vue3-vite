<script>
import {reactive} from "vue";

export default {
  name: 'App',
  // 数据和函数包裹在 setup() 中
  setup() {
    const data = reactive({
      name: '小丁',
      age: 18
    })
    // 添加一个 sex 属性
    const addSex = () => {
      // 因为 Vue3 监测引用数据类的值与 Vue2 不同，所以可以直接添加
      // Vue3 监测数据使用的是 ES6 新增的 Proxy 对象，而 Vue2 使用的是 Object.defineProperty() 进行数据劫持( 匹配 getter setter )
      // Vue2 中需要用到 $set() 添加、修改或删除应用数据类型
      data.sex = '男'
    }
    // 删除 age 属性
    const deleteAge = () => {
      // 因为 Vue3 监测引用数据类的值与 Vue2 不同，所以可以直接删除
      delete data.age
    }
    return {
      data, addSex, deleteAge
    }
  }
}
</script>

<template>
  <h1>人员信息</h1>
  <h2>姓名：{{data.name}}</h2>
  <h2 v-if="data.age">年龄：{{data.age}}</h2>
  <h2 v-if="data.sex">性别：{{data.sex}}</h2>
  <button @click="addSex">点我添加sex</button>
  <button @click="deleteAge">点我删除age</button>
</template>
