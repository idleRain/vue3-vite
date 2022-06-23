<template>
  <ul class="list">
    <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__headShake"
        leave-active-class="animate__bounceOut"
        appear>
      <MyItem/>
    </transition-group>
  </ul>
</template>

<script>
// 引入 animate.css
// import 'animate.css'
import MyItem from "./MyItem.vue";

export default {
  name: "MyList",
  components: {MyItem}
}
</script>

<style lang="less" scoped>
.list {
  border: 1px solid #cfcfcf;
  border-radius: 3px;

  .item:not(:first-child) {
    border-top: 1px solid #cfcfcf;
  }
}
</style>
