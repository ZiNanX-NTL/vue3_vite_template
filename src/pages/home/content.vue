<template>
  <div class="text">
    {{ cpnName }}
    <span>颜色{{ color }}</span>
    <n-button @click="updateColor">修改颜色</n-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from 'naive-ui'
const cpnName = 'contentY'
const color = ref('red')

const updateColor = () => {
  color.value = isEqualSelf(color.value, 'black') ? 'red' : 'black'
}

interface IisEqualSelf {
  (self: string, value: string): boolean
}

const isEqualSelf: IisEqualSelf = (self, value) => {
  return self === value
}
</script>

<style lang="scss" scoped>
.text {
  color: v-bind(color);
}
</style>
