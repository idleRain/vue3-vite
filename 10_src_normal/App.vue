<template>
  <h1>当前数值： {{ num }}</h1>
  <h1>放大的数值： {{ bigNum }}</h1>
  <button @click="add">点我点我</button>
  <hr>
  <button @click="sayHello">sayHello</button>
  <br>
  <button @click="name='小叮当';age++">点我改个名: {{ name }} {{ age }}</button>
  <hr>
  <button @click="change">Test</button>
  <hr>
  <MyComponent :money="num"></MyComponent>
</template>

<script lang="ts" setup>
import {computed, reactive, ref, toRefs, watch} from "vue"
import MyComponent from './components/MyComponent.vue'

type data = {
  name: string
  age: number
  hobby: string[]
}
const num = ref<number>(0)

const data = reactive<data>({
  name: '小丁',
  age: 18,
  hobby: ['学习', '运动', '开车']
})

const {name, age} = toRefs<data>(data)

const add = (): void => {
  num.value++
}
const bigNum = computed<number>(() => {
  return num.value * 9
})
const sayHello = (): void => {
  console.log(data)
  console.log('Hello, React!')
}

const testData = reactive({
  name: '小丁',
  hobby: {
    h1: '123',
    h2: '456',
    h3: '789',
  }
})
const change = () => {
  testData.hobby.h2 = 'OHHHHHHHHHHH!!!'
}
// 注意 : 直接监视 reactive 定义的数据时， deep 配置项会失效( 强制开启 )，且无法监视到 oldValue
watch(testData, (newValue, oldValue) => {
  console.log(newValue, oldValue)
}, {deep: false})
</script>
