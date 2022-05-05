<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
      <div class="w-[720px] bg-white -translate-y-16 md:translate-y-o md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
        <div class="p-6">
          <h2 class="text-center text-gray-700 text-lg mt-3">会员登陆</h2>
          <div class="mt-8">
            <Field name="account" value="123@qwe.com" class="zn-input" label="账号"></Field>
            <ErrorMessage name="account" as="div" class="zn-error"></ErrorMessage>
            <Field name="password" value="123456" class="zn-input mt-3" label="密码"></Field>
            <ErrorMessage name="password" as="div" class="zn-error"></ErrorMessage>
            <!-- <ZnInput v-model="form.account" placeholder="请输入手机号或邮箱"></ZnInput> -->
            <!-- <zn-input v-model="form.password" placeholder="请输入密码" class="mt-3"></zn-input> -->
          </div>
          <zn-button class="mt-3"></zn-button>

          <div class="flex gap-2 justify-center mt-5">
            <zn-link></zn-link>
            <!-- <a href="" class="text-xs text-gray-700 hover:text-violet-500">网站首页</a> -->
            <a href="" class="text-xs text-gray-700">会员注册</a>
            <a href="" class="text-xs text-gray-700">找回密码</a>
          </div>
        </div>
        <div class="hidden md:block relative">
          <img src="@/assets/images/login.jpg" class="absolute h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage, yup } from '@/plugins/validate'
import userApi from '@/api/user'
import { store } from '@/utils'
import { useRouter } from 'vue-router'

const router = useRouter()

const schema = yup.object({
  account: yup.string().required().email(),
  password: yup.string().required().min(3),
})
// const schema = {
//   account: { required: true, email: true },
//   password: { required: true, min: 3 },
// }

const onSubmit = async (values: any) => {
  const {
    data: { token },
  } = await userApi.login(values)
  store.set('token', {
    token,
  })
  router.push({ name: 'home' })
}
</script>

<script lang="ts">
export default {
  route: { name: 'login' },
}
</script>

<style scoped lang="scss"></style>
