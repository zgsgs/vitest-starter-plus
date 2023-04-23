<script setup lang="ts">
import {
  AppIcon,
  CopyWorld,
  FetchWorld,
  HelloWorld,
} from '@/components'
</script>

<template>
  <AppIcon />
  <HelloWorld msg="Vite + Vue + TS + Docker + MSW + Vitest" />
  <div class="flex gap-2 justify-center items-center">
    <CopyWorld text="Vite+Vue+TS+Docker+MSW+Vitest " />
    <FetchWorld />
  </div>
</template>
