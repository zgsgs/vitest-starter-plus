<script setup lang="ts">
defineOptions({ name: 'FetchWorld' })
const state = reactive({
  info: '',
})
async function fetchInfo(): Promise<void> {
  state.info = await fetch('/user/info').then(res => res.json())
}
</script>

<template>
  <button @click="fetchInfo">
    {{ state.info || 'Get' }}
  </button>
</template>
