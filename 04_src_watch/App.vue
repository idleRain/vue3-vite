<template>
</template>

<script setup>
import {watch, ref} from "vue";
// 监听单个ref
const money1 = ref(100)
watch(money1, (value, oldValue) => {
  console.log(value)
})

// 监听多个ref
const money2 = ref(100)
const count = ref(0)
watch([money2, count], (value) => {
  console.log(value)
})

// 监听ref复杂数据
const user1 = ref({
  name: 'zs',
  age: 18,
})
watch(
    user1,
    (value) => {
      console.log('user变化了', value)
    },
    {
      // 深度监听，，，当ref的值是一个复杂数据类型，需要深度监听
      deep: true,
      immediate: true
    }
)

// 监听对象的某个属性的变化
const user2 = ref({
  name: 'zs',
  age: 18,
})
watch(
    () => user2.value.name,
    (value) => {
      console.log(value)
    }
)
</script>

<style scoped>

</style>
