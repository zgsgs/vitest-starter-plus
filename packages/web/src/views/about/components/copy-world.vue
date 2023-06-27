<script setup lang="ts">
import type { CopyWorldProps } from './hooks'
import { useCopyWorld } from './hooks'

const props = withDefaults(defineProps<CopyWorldProps>(), {
  text: '',
})

defineOptions({ name: 'CopyWorld' })
const { text, handleClick } = useCopyWorld(props)
</script>

<template>
  <button class="copy" @click="handleClick">
    拷贝
  </button>
  <p>{{ text }}</p>
</template>
