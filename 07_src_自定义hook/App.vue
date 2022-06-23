<template>
  <button @click="isShow = !isShow">点我卸载/安装Demo组件</button>
  <Demo v-if="isShow"></Demo>
</template>

<script>
import Demo from "./components/Demo.vue"
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    let isShow = ref(true)
    return {
      isShow
    }
  }
}
</script>
