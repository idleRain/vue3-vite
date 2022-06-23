<template>
  <li class="item">
    <label>
      <input >
      <!-- 根据 todo.done 动态绑定 类名 -->
      <span>xxx</span>
      <input>
    </label>
    <div>
      <a href="javascript:void(0)">编辑</a>
      <a href="javascript:void(0)">删除</a>
    </div>
  </li>
</template>

<script>

</script>

<style lang="less" scoped>
.item {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  transition: all .4s;
  color: #333;

  input {
    margin: 0 10px 0 8px;
  }

  span {
    position: relative;
    transition: all .2s;
    font-size: 16px;

    &.active {
      color: #999;
      text-decoration: line-through;
    }
  }

  div {
    display: flex;

    a {
      display: none;
      margin: 4px 5px 0;
      padding: 0 4px;
      height: 20px;
      border-radius: 3px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      text-decoration: none;
    }

    a:nth-child(1) {
      background: #90c9e0;
    }

    a:last-child {
      background: #e95955;
    }
  }

  &:hover {
    background: #ededed;
  }

  &:hover div a {
    display: block;
  }

  input[type="text"] {
    border: none;
    margin-left: -3px;
    padding-left: 3px;
    height: 20px;
    border-bottom: 1px solid #999;
    background-color: transparent;
    outline: none;
    font-size: 16px;
  }
}


</style>
