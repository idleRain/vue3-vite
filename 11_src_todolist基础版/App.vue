<script setup lang="ts">
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import {ref, watch} from "vue"

type todoId = number | string
type list = {
  id: todoId
  name: string
  done: boolean
}

// 提供数据
// let list = ref<list[]>([
//   {id: 1, name: '吃饭', done: true},
//   {id: 2, name: '睡觉', done: false},
//   {id: 3, name: '开车', done: false}
// ])
const list = ref<list[]>(JSON.parse(localStorage.getItem('todolist') || '[]'))

// 处理状态修改
const handleChangeDone = (id: todoId) => {
  const todo = list.value.find(item => item.id === id)
  todo.done = !todo.done
}
// 处理删除数据
const handleDeleteTodo = (id: todoId): void => {
  list.value = list.value.filter(item => item.id !== id)
  // console.log(id)
  // list = reactive<list[]>(list.filter(item => item.id !== id))
}
// 处理添加
const handleAddTodo = (taskName: string): void => {
  list.value.unshift({
    id: Date.now(),
    name: taskName,
    done: false
  })
}
// 全选、反选
const handleAllDone = (state: boolean) => {
  list.value.forEach(item => item.done = state)
}
// 本地储存
watch(list, () => {
  localStorage.setItem('todolist', JSON.stringify(list.value))
}, {deep: true})
</script>

<template>
  <section class="todoapp">
    <TodoHeader @handleAddTodo="handleAddTodo"></TodoHeader>
    <TodoMain
        :list="list"
        @handleChangeDone="handleChangeDone"
        @handleDeleteTodo="handleDeleteTodo"
        @handleAllDone="handleAllDone"
    ></TodoMain>
    <TodoFooter :list="list"></TodoFooter>
  </section>
</template>

<style></style>
