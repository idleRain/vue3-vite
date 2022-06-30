<template>
  <div>
    money: {{ money }}
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue"

const props = defineProps(['money'])
</script>

<style scoped>

</style>
