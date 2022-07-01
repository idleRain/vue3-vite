<script setup lang="ts">
import {ref} from "vue"

const emit = defineEmits(['handleAddTodo'])

const taskName = ref<string>('')
const add = () => {
  if (!taskName.value.length) return
  emit('handleAddTodo', taskName.value)
  taskName.value = ''
}</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        v-model.trim="taskName"
        @keydown.enter="add"
    />
  </header>
</template>

<style lang="less" scoped></style>
