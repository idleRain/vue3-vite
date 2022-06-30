<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import {reactive, ref} from "vue"

type todoId = number | string

type list = {
  id: todoId
  name: string
  done: boolean
}

// 提供数据
let list = reactive<list[]>([
  {id: 1, name: '吃饭', done: true },
  {id: 2, name: '睡觉', done: false},
  {id: 3, name: '开车', done: false}
])
// 处理状态修改
const handleChangeDone = (id: todoId) => {
  const todo = list.find(item => item.id === id)
  todo.done = !todo.done
}
// 处理删除数据
const handleDeleteTodo = (id: todoId) => {
  // console.log(id)
  list = reactive<list[]>(list.filter(item => item.id !== id))
}
// 处理添加
const handleAddTodo = (taskName: string) => {
  list.unshift({
    id: Date.now(),
    name: taskName,
    done: false
  })
}
</script>

<template>
  <section class="todoapp">
    <TodoHeader @handleAddTodo="handleAddTodo"></TodoHeader>
    <TodoMain :list="list" @handleChangeDone="handleChangeDone" @handleDeleteTodo="handleDeleteTodo"></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style></style>
