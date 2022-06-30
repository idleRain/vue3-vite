<script setup lang="ts">
import {computed} from "vue";

const props = defineProps(['list'])
const emit = defineEmits(['handleChangeDone', 'handleDeleteTodo', 'handleAllDone'])

const changeDone = id => {
  emit('handleChangeDone', id)
}

const isAll = computed({
  get() {
    return props.list.every(item => item.done)
  },
  set(val: boolean) {
    emit('handleAllDone', val)
  }
})
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="{completed:item.done}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="changeDone(item.id)"/>
          <label>{{item.name}}</label>
          <button class="destroy" @click="emit('handleDeleteTodo', item.id)"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template"/>
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped></style>
