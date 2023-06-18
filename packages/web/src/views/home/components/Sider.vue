<script setup lang="ts">
defineOptions({ name: 'Sider' })
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
</script>

<template>
  <template v-for="(m, index) in state.menus" :key="index">
    <a :href="m.path">
      <i :class="m.icon" />
      <div>{{ m.name }}</div>
    </a>
  </template>
</template>
