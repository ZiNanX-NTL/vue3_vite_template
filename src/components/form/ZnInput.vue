<template>
  <input type="text" :value="props.modelValue" class="zn-input" @input="input" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])

const input = (value: any) => {
  // console.log(value.target.value)
  emit('update:modelValue', value.target.value)
}
</script>

<style scoped lang="scss">
.zn-input {
  @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-xs focus:ring-1 ring-offset-2 ring-violet-600 duration-300 focus:border-white;
}
</style>
