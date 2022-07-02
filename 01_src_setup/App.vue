<template>
  <Demo message="你好啊" school="麻省理工大学" @hello="showMsg">
    <template v-slot:haha>
      <p>确实帅</p>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue"

export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    const showMsg = msg => {
      alert(msg)
    }
    return {showMsg}
  }
}
</script>

<style scoped>

</style>
