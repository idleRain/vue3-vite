<script setup lang="ts">
import {ref} from "vue"
import {useTodosStore} from "../stores/todos";
const todos = useTodosStore()

const taskName = ref<string>('')
const addTodo = () => {
  if (!taskName.value.length) return
  todos.handleAddTodo(taskName.value)
  taskName.value = ''
}
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus v-model.trim="taskName" @keydown.enter="addTodo" />
  </header>
</template>

<style lang="less" scoped></style>
