<script setup lang="ts">
import { useFetchDemo } from './hooks'

defineOptions({ name: 'FetchDemo' })
const { data: info, fetchInfo } = useFetchDemo()
</script>

<template>
  <div>
    <button @click="fetchInfo">
      Get
    </button>
    <p>{{ info }}</p>
  </div>
</template>
