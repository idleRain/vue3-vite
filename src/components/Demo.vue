<template>
  <h2>当前的数字： {{ num }}</h2>
  <button @click="num++">点我加一</button>
  <p>----------------------</p>
  <h2>提示： {{ msg }}</h2>
  <button @click="msg += '！'">点我修改</button>
  <p>----------------------</p>
  <h2>姓名： {{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <h2>薪资： {{ person.job.job.salary }} K</h2>
  <button @click="person.name = '小何'">点我修改姓名</button>
  <button @click="person.age += 1">点我过个生</button>
  <button @click="person.job.job.salary += 1">点我涨薪</button>
</template>

<script>
import {ref, watch, reactive} from "vue";

export default {
  name: "Demo",
  setup() {
    let num = ref(0)
    let msg = ref('你好啊')
    const person = reactive({
      name: '小丁',
      age: 18,
      job: {
        job: {
          salary: 20
        }
      }
    })

    /*
     * Vue3 中的 watch 属性改为了函数，需要 import 引入
     * 可以接收 3 个参数 ：
     *   第一个参数 ：被监视(侦听)的值
     *   第二个参数 ：回调函数 -- 接收两个参数 ( 新值 , 旧值 )
     *   第三个参数 ：配置项对象
     *      1. immediate ： 是否监视第一次，默认为 false
     *      2. deep ： 是否开启深度监视，默认为 false
     */

    // 一 、 监视一个 ref 值
    /*watch(num, (newValue, oldValue) => {
      console.log(`num 的值改变了,新值是${newValue},旧值是${oldValue}`)
    },{ immediate: true, deep: true})*/

    // 二 、 监视多个 ref 值 ，第一个参数写成数组
    watch([num, msg], (newValue, oldValue) => {
      console.log(`num 或 msg 的值改变了`, newValue, oldValue)
    })

    // 三 、 监视 reactive 声明的应用数据类型的全部属性
    //      注意 ： 这里无法正常获取 oldValue
    //      注意 ： 默认就开启了深度监视( 强制开启 ！ deep 配置无效 ！！！)
    /*watch(person, (newValue, oldValue) => {
      console.log('person被改变了', newValue, oldValue)
    })*/

    // 四 、 监视 reactive 声明的应用数据类型的某一个属性， 注意：第一个参数写成回调函数
    /*watch(() => person.age, (newValue, oldValue) => {
      console.log(`age 的值改变了`, newValue, oldValue)
    })*/

    // 五 、 监视 reactive 声明的应用数据类型的某些属性， 注意：第一个参数写成数组，数组里面写回调函数
    /*watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log(`name 或 age 的值改变了`, newValue, oldValue)
    })*/

    // 六 、 深度监视 reactive 声明的应用数据类型里面更深层次的引用数据类型 ， 这里必须开启 deep 配置项 , 但同样无法获取旧值
    watch(() => person.job, (newValue, oldValue) => {
      console.log('job发生改变了', newValue, oldValue)
    }, {deep: true})

    return {
      num, msg, person
    }
  }
}
</script>

<style scoped>

</style>
