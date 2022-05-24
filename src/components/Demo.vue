<template>
  <h2>当前的数字： {{ num }}</h2>
  <button @click="num++">点我加一</button>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";

export default {
  name: "Demo",
  setup() {
    let num = ref(0)
    // 组合式 API 使用生命周期钩子， 并且执行顺序永远在配置项式生命周期钩子前面
    // 原 beforeCreate 与 created 在组合式 API 中已被 setup 取代
    console.log('--- setup ---')
    onBeforeMount(() => {
      console.log('--- onBeforeMount ---')
    })
    onMounted(() => {
      console.log('--- onMounted ---')
    })
    onBeforeUpdate(() => {
      console.log('--- onBeforeUpdate ---')
    })
    onUpdated(() => {
      console.log('--- onUpdated ---')
    })
    onBeforeUnmount(() => {
      console.log('--- onBeforeUnmount ---')
    })
    onUnmounted(() => {
      console.log('--- onUnmounted ---')
    })

    return {
      num
    }
  },
  // 通过配置项的形式使用生命周期钩子
  /*beforeCreate() {
    console.log('--- beforeCreate ---')
  },
  created() {
    console.log('--- created ---')
  },
  beforeMount() {
    console.log('--- beforeMount ---')
  },
  mounted() {
    console.log('--- mounted ---')
  },
  beforeUpdate() {
    console.log('--- beforeUpdate ---')
  },
  updated() {
    console.log('--- updated ---')
  },
  // 注意 ：原 beforeDestroy 、 destroyed 已更名 beforeUnmount 、 unmounted
  beforeUnmount() {
    console.log('--- beforeUnmount ---')
  },
  unmounted() {
    console.log('--- unmounted ---')
  }*/
}
</script>

<style scoped>

</style>
