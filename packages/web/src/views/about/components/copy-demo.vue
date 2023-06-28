<script setup lang="ts">
// import type { CopyDemoProps } from './hooks'
import { useCopy } from '@/hooks'

interface CopyDemoProps {
  value: string
}
const props = withDefaults(defineProps<CopyDemoProps>(), {
  value: '',
})

defineOptions({ name: 'CopyDemo' })

const { text, copy, read } = useCopy()
const isCopy = ref(false)
async function handleCopy() {
  const result = await copy(props.value)
  isCopy.value = result
}
async function handleRead() {
  const res = await read()
  // eslint-disable-next-line no-console
  console.log(res)
}
</script>

<template>
  <div>
    <button class="copy" @click="handleCopy">
      {{ $t('message.common.copy') }}
    </button>
    <p>{{ isCopy }}</p>
  </div>
  <div>
    <button class="copy" @click="handleRead">
      {{ $t('message.common.read') }}
    </button>
    <p>{{ text }}</p>
  </div>
</template>
