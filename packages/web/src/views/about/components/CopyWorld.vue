<script setup lang="ts">
import { useCopy } from '@/hooks'

interface Props {
  text: string
}
const props = withDefaults(defineProps<Props>(), {
  text: '',
})
defineOptions({ name: 'CopyWorld' })
const { copyText, read } = useCopy(props.text)
const state = reactive({
  text: '',
})
async function handleClick() {
  copyText()
  state.text = await read()
}
</script>

<template>
  <button class="copy" @click="handleClick">
    {{ state.text || '拷贝' }}
  </button>
</template>
