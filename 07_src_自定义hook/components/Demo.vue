<template>
  <h2>当前的数字： {{ num }}</h2>
  <button @click="num++">点我加一</button>
  <h2>当前点击的鼠标坐标是—— x：{{point.x}}-y:{{point.y}}</h2>
</template>

<script>
import {ref} from "vue";
// 引入自定义 hook
import usePoint from '../hooks/usePoint.js'

export default {
  name: "Demo",
  setup() {
    let num = ref(0)
    const point = usePoint()
    debugger
    return {
      num, point
    }
  }
}
</script>

<style scoped>

</style>
