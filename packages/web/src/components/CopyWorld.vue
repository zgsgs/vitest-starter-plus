<script setup lang="ts">
import { useCopy } from '@/hooks'

interface Props {
  text: string
}
/* 组件属性 */
const props = withDefaults(defineProps<Props>(), {
  text: '',
})
/* 组件事件 */
/* 宏定义 */
defineOptions({ name: 'CopyWorld' })
/* Hooks */
const { copyText, read } = useCopy(props.text)
/* 状态数据 */
const state = reactive({
  text: '',
})
/* 其他数据 */

/* 计算 */
/* 监听 */
/* 事件 */
async function handleClick() {
  copyText()
  state.text = await read()
}
/* 生命周期 */
/* 函数 */
</script>

<template>
  <button class="copy" @click="handleClick">
    {{ state.text || '拷贝' }}
  </button>
</template>

<style scoped></style>
