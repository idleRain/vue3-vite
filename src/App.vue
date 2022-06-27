<template>
  <table border width="600">
    <thead>
    <tr>
      <th>商品名称</th>
      <th>数量</th>
      <th>单价</th>
      <th>单品总价</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item,index) in data" :key="index">
      <td>{{ item.name }}</td>
      <td style="display: flex;justify-content: space-between;">
        <button @click="addAndSub(item, false)">-</button>
        {{ item.quantity }}
        <button @click="addAndSub(item, true)">+</button>
      </td>
      <td>{{ item.price }}</td>
      <td>{{ cumulative(index) }}</td>
      <td>
        <button @click="del(index)">删除</button>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
      <td colspan="5" style="text-align: end">总价：{{ total }}</td>
    </tr>
    </tfoot>
  </table>
</template>

<script lang="ts" setup>
import {reactive, computed} from "vue"

type Shop = {
  name: string
  quantity: number
  price: number
}
const data = reactive<Shop[]>([
  {name: '黑米', quantity: 1, price: 100},
  {name: '黄豆', quantity: 1, price: 200},
  {name: '紫薯', quantity: 1, price: 300},
  {name: '布加迪威龙', quantity: 1, price: 400}
])

// 单品总价
const cumulative = (index): number => {
  return data[index].price * data[index].quantity
}
// 删除
const del = (index): void => {
  data.splice(index, 1)
}
// 数量加减
const addAndSub = (item: Shop, type: boolean): void => {
  if (item.quantity > 1 && !type) item.quantity--
  if (item.quantity < 99 && type) item.quantity++
}
// 总价
const total = computed<number>(() => {
  return data.reduce((prev, item) => {
    return prev + item.quantity * item.price
  }, 0)
})
</script>

<style scoped>

</style>
