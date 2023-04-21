<script setup lang="ts">
import { copyText } from '@/utils'

/* 组件属性 */
/* 组件事件 */
/* 宏定义 */
defineOptions({ name: 'CopyWorld' })
/* Hooks */
/* 状态数据 */
/* 其他数据 */

/* 计算 */
/* 监听 */
/* 事件 */
/* 生命周期 */
/* 函数 */
</script>

<template>
  <button class="copy" @click="copyText('拷贝一段文本')">
    拷贝
  </button>
</template>

<style scoped></style>
