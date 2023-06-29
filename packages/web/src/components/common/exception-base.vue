<script setup lang="ts">
import type { ExceptionBaseProps } from './exception-base'
import { routeName } from '@/router'

defineProps<ExceptionBaseProps>()

defineOptions({ name: 'ExceptionBase' })

const routeHomePath = routeName('root')
</script>

<template>
  <div class="flex-col-center min-h-520px gap-24px wh-full overflow-hidden">
    <div class="flex text-primary text-400px">
      <icon-local-no-permission v-if="type === '403'" />
      <icon-local-not-found v-if="type === '404'" />
      <icon-local-service-error v-if="type === '500'" />
    </div>
    <router-link :to="{ name: routeHomePath }">
      <n-button type="primary">
        回到首页
      </n-button>
    </router-link>
  </div>
</template>
