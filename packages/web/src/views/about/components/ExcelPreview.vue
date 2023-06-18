<script setup lang="ts">
import { HotTable } from '@handsontable/vue3'
import { useExcelPreview } from './ExcelPreview'

defineOptions({ name: 'ExcelPreview' })
const { hotSettings } = useExcelPreview()
</script>

<template>
  <HotTable :settings="hotSettings" />
</template>
