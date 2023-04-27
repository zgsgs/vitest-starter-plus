<script setup lang="ts">
/* 宏定义 */
defineOptions({ name: 'AppIcon' })
/* 组件属性 */
/* 组件事件 */
/* 状态数据 */
/* Hooks */
/* 其他数据 */
/* 计算 */
/* 监听 */
/* 事件 */
/* 生命周期 */
/* 函数 */
</script>

<template>
  <div class="flex justify-center items-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/svg-icon/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <SvgIcon name="icon-local-ts" class="logo ts" alt="TS logo" />
    </a>
    <a href="https://www.docker.com/" target="_blank">
      <div class="logo">
        <i class="h-full w-full i-skill-icons-docker docker" />
      </div>
    </a>
    <a href="https://mswjs.io/" target="_blank">
      <div class="logo">
        <i class="h-full w-full i-logos-msw-icon msw" />
      </div>
    </a>
    <a href="https://cn.vitest.dev/" target="_blank">
      <div class="logo">
        <i class="h-full w-full i-logos-vitest vitest" />
      </div>
    </a>
  </div>
</template>

<style scoped>
.logo {
  width: 6em;
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.ts:hover {
  filter: drop-shadow(0 0 2em #007accaa);
}
.docker:hover {
  filter: drop-shadow(0 0 2em #2396edaa);
}
.msw:hover {
  filter: drop-shadow(0 0 2em #ed7344aa);
}
.vitest:hover {
  filter: drop-shadow(0 0 2em #fcc72baa);
}
</style>
