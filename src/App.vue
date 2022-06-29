<template>
  <h1>当前数值： {{ num }}</h1>
  <button @click="add">点我点我</button>
  <hr>
  <button @click="sayHello">sayHello</button>
  <br>
  <button @click="name='小何';age++">点我改个名: {{name}}{{age}}</button>
</template>

<script lang="ts" setup>
import {reactive, ref, toRefs} from "vue"

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
const sayHello = (): void => {
  console.log(data)
  console.log('Hello, React!')
}
</script>
