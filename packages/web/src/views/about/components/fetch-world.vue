<script setup lang="ts">
import { useFetchWorld } from './hooks'

defineOptions({ name: 'FetchWorld' })
const { info, fetchInfo } = useFetchWorld()
</script>

<template>
  <button @click="fetchInfo">
    Get
  </button>
  <p>{{ info }}</p>
</template>
