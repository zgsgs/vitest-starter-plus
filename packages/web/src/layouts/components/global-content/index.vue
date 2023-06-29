<script setup lang="ts">
import type { GlobalContentProps } from '.'
import { useAppStore, useRouteStore, useThemeStore } from '@/store'

withDefaults(defineProps<GlobalContentProps>(), {
  showPadding: true,
})

defineOptions({ name: 'GlobalContent' })

const app = useAppStore()
const theme = useThemeStore()
const routeStore = useRouteStore()
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="theme.pageAnimateMode"
      mode="out-in"
      :appear="true"
      @before-leave="app.setDisableMainXScroll(true)"
      @after-enter="app.setDisableMainXScroll(false)"
    >
      <keep-alive :include="routeStore.cacheRoutes">
        <component
          :is="Component"
          v-if="app.reloadFlag"
          :key="route.fullPath"
          :class="{ 'p-16px': showPadding }"
          class="flex-grow bg-#f6f9f8 transition ease-in-out duration-300 dark:bg-#101014"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>
