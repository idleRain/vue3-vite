<template>
  <div id="app">
    <!--    将函数传给 MyHeader 进行添加数据-->
    <MyHeader></MyHeader>
    <!--    将数据传给 MyList 进行渲染-->
    <MyList>
    </MyList>
    <MyFooter></MyFooter>
  </div>
</template>

<script>

import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: 'App',
  // 注册组件
  components: {
    MyHeader,
    MyList,
    MyFooter
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

#app {
  margin: 100px auto;
  padding: 15px;
  width: 500px;
  border: 2px solid #ccc;
  border-radius: 4px;

}
</style>
