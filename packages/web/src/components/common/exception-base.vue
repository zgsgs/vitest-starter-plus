<script setup lang="ts">
import { routeName } from '@/router'

interface Props {
  /** 异常类型 403 404 500 */
  type: ExceptionType
}

defineProps<Props>()

defineOptions({ name: 'ExceptionBase' })

type ExceptionType = '403' | '404' | '500'

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
