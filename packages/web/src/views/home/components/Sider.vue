<script setup>
/* 组件属性 */
/* 组件事件 */
/* 宏定义 */
defineOptions({ name: 'Sider' })
/* Hooks */
/* 状态数据 */
const state = reactive({
  menus: [
    {
      icon: '',
      name: 'Home',
      path: '/home',
    },
    {
      icon: '',
      name: 'Notifications',
      path: '/notifications',
    },
    {
      icon: '',
      name: 'Conversations',
      path: '/conversations',
    },
    {
      icon: '',
      name: 'Favorites',
      path: '/favorites',
    },
    {
      icon: '',
      name: 'Bookmarks',
      path: '/bookmarks',
    },
    {
      icon: '',
      name: 'Compose',
      path: '/compose',
    },
    {
      icon: '',
      name: 'About',
      path: '/about',
    },
  ],
})
/* 其他数据 */

/* 计算 */
/* 监听 */
/* 事件 */
/* 生命周期 */
/* 函数 */
</script>

<template>
  <template v-for="(m, index) in state.menus" :key="index">
    <a :href="m.path">
      <i :class="m.icon" />
      <div>{{ m.name }}</div>
    </a>
  </template>
</template>
