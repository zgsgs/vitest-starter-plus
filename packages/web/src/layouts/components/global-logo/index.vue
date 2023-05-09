<script setup lang="ts">
import { routePath } from '@/router'
import { setLocale, t } from '@/locales'
import { languageType } from '@/constants'

defineProps<Props>()

defineOptions({ name: 'GlobalLogo' })

interface Props {
  /** 显示名字 */
  showTitle: boolean
}
const { bool, toggle } = useBoolean()
const routeHomePath = routePath('root')

function toggleLocal() {
  toggle()
  setLocale(bool ? languageType.en : languageType.zh)
}
</script>

<template>
  <router-link :to="routeHomePath" class="flex-center w-full nowrap-hidden">
    <system-logo class="text-primary text-32px" />
    <h2
      v-show="showTitle"
      class="font-bold text-primary pl-8px transition ease-in-out text-16px duration-300"
      @click="toggleLocal"
    >
      {{ t('message.system.title') }}
    </h2>
  </router-link>
</template>
