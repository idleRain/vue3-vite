<template>
  <h1>一个人的信息</h1>
  <h2>姓名： {{data.name}}</h2>
  <h2>年龄： {{data.age}}</h2>
  <slot name="haha"></slot>
  <button @click="fn">点我点我</button>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "Demo",
  props: ['message', 'school'],
  // emits 声明接收父组件传过来的自定义事件 , 当然不写也能正常运行 , 但是控制台会报 [警告]
  emits: ['hello'],
  beforeCreate() {
    console.log('--- beforeCreate ---')
  },
  // setup 执行比 beforeCreate这个钩子早 , 并且 this 指向 undefined
  /*
   *  setup 接收两个参数 :
   *    第一个参数 : 父组件传过来的 props
   *    第二个参数 : context -- 上下文
   *      context.attrs 相当于 Vue2 中的 $attrs
   *      context.emit 触发自定义事件的 , 相当于 $emit
   *      context.slot 插槽
   */
  setup(props, context) {
    console.log('--- setup ---', this)
    // props 是接受的 props 参数
    console.log(props)
    const data = reactive({
      name: '小丁',
      age: 18
    })
    const fn = () => {
      context.emit('hello', '你好啊!' + data.name)
    }
    return {
      data, fn
    }
  }
}
</script>

<style scoped>

</style>
