<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
    <div class="w-[720px] bg-white -translate-y-16 md:translate-y-o md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg mt-3">会员登陆</h2>
        <div class="mt-8">
          <ZnInput v-model="form.account" placeholder="请输入手机号或邮箱"></ZnInput>
          <zn-input v-model="form.password" placeholder="请输入密码" class="mt-3"></zn-input>
        </div>
        <zn-button class="mt-3"></zn-button>

        <div class="flex gap-2 justify-center mt-5">
          <zn-link></zn-link>
          <!-- <a href="" class="text-xs text-gray-700 hover:text-violet-500">网站首页</a> -->
          <a href="" class="text-xs text-gray-700">会员注册</a>
          <a href="" class="text-xs text-gray-700">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="@/assets/images/login.jpg" class="h-80 w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  account: '',
  password: '',
})
</script>

<style scoped lang="scss"></style>
