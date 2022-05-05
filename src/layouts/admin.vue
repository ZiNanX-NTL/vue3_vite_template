<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>

<style scoped lang="scss"></style>
