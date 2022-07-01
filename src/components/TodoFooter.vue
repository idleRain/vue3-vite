<script setup lang="ts">
import {useTodosStore} from "../stores/todos";

const todos = useTodosStore()

</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ todos.uncompletedTodosAll }}</strong> item left</span>
    <ul class="filters">
      <li v-for="item in todos.filter" :key="item">
        <a :class="{selected: item === todos.active}"
           href="javascript: void(0);"
           @click="todos.changeActiveState(item)">
          {{ item }}
        </a>
      </li>
    </ul>
    <button class="clear-completed" @click="todos.clearCompletedTodos">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped></style>
