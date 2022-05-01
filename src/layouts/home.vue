<template>
  <div>
    {{ name }}
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const name = 'home'
</script>

<style lang="scss" scoped></style>
