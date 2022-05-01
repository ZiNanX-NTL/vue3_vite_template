<template>
  <div>
    {{ name }}
    store: {{ mainStore.name }}
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from '@/store/index'
const name = 'user'

const mainStore = useMainStore()
</script>

<style lang="scss" scoped></style>
