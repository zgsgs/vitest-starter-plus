<script setup lang="ts">
import {
  AppIcon,
  CopyWorld,
  ExcelPreview,
  FetchWorld,
  HelloWorld,
} from './components'

/* Hooks */
/* 状态数据 */
// const state = reactive({})
/* 其他数据 */

/* 计算 */
/* 监听 */
/* 事件 */
/* 生命周期 */
/* 函数 */
</script>

<template>
  <AppIcon />
  <HelloWorld msg="Vite + Vue + TS + Docker + MSW + Vitest" />
  <div class="flex gap-2 justify-center items-center">
    <CopyWorld text="Vite+Vue+TS+Docker+MSW+Vitest " />
    <FetchWorld />
  </div>
  <ExcelPreview />
</template>

<style scoped></style>
