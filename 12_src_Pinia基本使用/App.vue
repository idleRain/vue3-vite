<template>
  <h2>我是pinia定义的num : {{ counter.num }}</h2>
  <h2>我是pinia定义的getter : {{ counter.bigNum }}</h2>
  <button @click="counter.add(911)">点我</button>
</template>

<script setup lang="ts">
import {useCounterStore} from "./stores/counter"

const counter = useCounterStore()
</script>

<style scoped>

</style>
