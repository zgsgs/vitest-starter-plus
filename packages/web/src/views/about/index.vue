<script setup lang="ts">
import {
  AppIcon,
  CopyDemo,
  ExcelPreview,
  FetchDemo,
  HelloWorld,
} from './components'
</script>

<template>
  <div class="flex flex-col gap-2 justify-center">
    <AppIcon />
    <HelloWorld msg="Vite + Vue + TS + Docker + MSW + Vitest" />
    <FetchDemo />
    <CopyDemo value="Vite+Vue+TS+Docker+MSW+Vitest " />
    <ExcelPreview />
  </div>
</template>
