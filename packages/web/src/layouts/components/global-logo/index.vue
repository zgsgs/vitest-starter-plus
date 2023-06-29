<script setup lang="ts">
import { useGlobalLogo } from '.'

withDefaults(defineProps<GlobalLogoProps>(), {
  showTitle: true,
})

defineOptions({ name: 'GlobalLogo' })

const { routeHomePath, showTitle, toggleLocal } = useGlobalLogo()
</script>

<template>
  <router-link :to="routeHomePath" class="flex-center w-full nowrap-hidden">
    <system-logo class="text-primary text-32px" />
    <h2
      v-show="showTitle"
      class="font-bold text-primary pl-8px transition ease-in-out text-16px duration-300"
      @click="toggleLocal"
    >
      {{ $t('message.system.title') }}
    </h2>
  </router-link>
</template>
