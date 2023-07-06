<script setup lang="ts">
import type { ExceptionBaseProps } from './exception-base'
import { routeName } from '@/router'

const props = defineProps<ExceptionBaseProps>()

defineOptions({ name: 'ExceptionBase' })

const routeHomePath = routeName('root')

const isNoPermission = computed(() => {
  return props.type === '403'
})
const isNotFound = computed(() => {
  return props.type === '404'
})
const isServiceError = computed(() => {
  return props.type === '500'
})
</script>

<template>
  <div class="flex-col-center min-h-520px gap-24px wh-full overflow-hidden">
    <div class="flex text-primary text-400px">
      <icon-local-no-permission v-if="isNoPermission" />
      <icon-local-not-found v-if="isNotFound" />
      <icon-local-service-error v-if="isServiceError" />
    </div>
    <router-link :to="{ name: routeHomePath }">
      <n-button type="primary">
        回到首页
      </n-button>
    </router-link>
  </div>
</template>
