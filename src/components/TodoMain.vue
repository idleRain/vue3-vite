<script setup lang="ts">
import {useTodosStore} from "../stores/todos"
const todos = useTodosStore()

todos.$subscribe(() => {
  localStorage.setItem('todolist', JSON.stringify(todos.list))
})
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="todos.isCheckAll" @change="todos.checkAll(!todos.isCheckAll)"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed: item.done}" v-for="item in todos.showList" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="todos.updateTodoState(item.id)"/>
          <label>{{item.name}}</label>
          <button class="destroy" @click="todos.deleteTodo(item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template"/>
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
