<template>
  <div>
    {{ name }}
    store: {{ mainStore.name }}
    <n-button @click="updateName">修改</n-button>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index'
import { NButton } from 'naive-ui'
const name = 'admin'

const mainStore = useMainStore()

const updateName = () => {
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}
</script>

<script lang="ts">
export default {
  route: { name: 'home' },
}
</script>

<style lang="scss" scoped></style>
