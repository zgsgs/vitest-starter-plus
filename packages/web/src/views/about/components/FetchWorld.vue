<script setup lang="ts">
/* 宏定义 */
defineOptions({ name: 'FetchWorld' })
/* Hooks */
/* 状态数据 */
const state = reactive({
  info: '',
})
/* 其他数据 */
/* 计算 */
/* 监听 */
/* 事件 */
/* 生命周期 */
/* 函数 */
async function fetchInfo(): Promise<void> {
  state.info = await fetch('/user/info').then(res => res.json())
}
</script>

<template>
  <button @click="fetchInfo">
    {{ state.info || 'Get' }}
  </button>
</template>
