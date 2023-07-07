<script setup lang="ts">
import { useFetchDemo } from './hooks'

defineOptions({ name: 'FetchDemo' })
const { data: info, getUserInfo } = useFetchDemo()
</script>

<template>
  <div>
    <button @click="getUserInfo">
      Get User Info
    </button>
    <p>{{ info }}</p>
  </div>
</template>
