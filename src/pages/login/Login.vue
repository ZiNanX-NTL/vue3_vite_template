<template>
  <div class="test">用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <div>
    {{ a }}
  </div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <hr />
  <n-button @click="change">naive-ui</n-button>
  <h1 class="text">Hello world!</h1>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index'
import { env } from '@/utils/helper'
import { NButton } from 'naive-ui'
import userApi from '@/api/user'
import { reactive, ref, toRefs } from 'vue'

const mainStore = useMainStore()

const updateName = () => {
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  })
}

const data = reactive({
  a: 1,
  b: 3,
})
const a1 = ref('1')
const { a, b } = toRefs(data)
// console.log(a, a1)
const change = () => {
  a.value = 5
}

userApi.getUserInfo().then((res) => {
  // console.log(res.data.age)
})
userApi.login().then((res) => {
  // console.log(res.data.token)
})

// console.log(env.VITE_APP)
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
.text {
  @apply text-3xl font-bold underline text-regal-blue hover:bg-slate-600 transition-all duration-300;
}
</style>
