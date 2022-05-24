<template>
  <h1>编辑一个人的信息</h1>
  <p>姓： <input v-model="person.firstName"></p>
  <p>名： <input v-model="person.lastName"></p>
  <p>全名： <input v-model="person.fullName"></p>
  <h3>全名： {{person.fullName}}</h3>
</template>

<script>
import {reactive, computed} from "vue";

export default {
  name: "Demo",
  setup() {
    const person = reactive({
      firstName: '',
      lastName: ''
    })

    // 计算属性简写形式，只考虑读取
    /*person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })*/

    // 计算属性完整写法，可以被修改
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const newArr = value.split('-')
        person.firstName = newArr[0]
        person.lastName = newArr[1]
      }
    })

    return {
      person
    }
  }
}
</script>

<style scoped>

</style>
