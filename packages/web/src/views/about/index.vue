<script setup lang="ts">
import {
  AppIcon,
  CopyWorld,
  ExcelPreview,
  FetchWorld,
  HelloWorld,
} from './components'
import { t } from '@/locales'
</script>

<template>
  <AppIcon />
  <HelloWorld msg="Vite + Vue + TS + Docker + MSW + Vitest" />
  <div class="flex gap-2 justify-center items-center">
    <CopyWorld text="Vite+Vue+TS+Docker+MSW+Vitest " />
    <FetchWorld />
    <div>
      <span>I18n:</span>
      <span>{{ t('message.system.title') }}</span>
    </div>
  </div>
  <ExcelPreview />
</template>
