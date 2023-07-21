<script setup lang="ts">
import { LAYOUT_SCROLL_EL_ID } from '../admin-layout'
import type { LayoutMode, ScrollMode } from '../admin-layout/types'
import { useBoolean } from '@/hooks'

const layoutMode = ref<LayoutMode>('vertical')
const layoutModeList: LayoutMode[] = ['vertical', 'horizontal']
function setLayoutMode(value: LayoutMode) {
  layoutMode.value = value
}

const scrollMode = ref<ScrollMode>('wrapper')
const scrollModeList: ScrollMode[] = ['wrapper', 'content']
function setScrollMode(value: ScrollMode) {
  scrollMode.value = value
}

const { bool: headerVisible, toggle: toggleHeaderVisible } = useBoolean(true)
const { bool: tabVisible, toggle: toggleTabVisible } = useBoolean(true)
const { bool: siderVisible, toggle: toggleSiderVisible } = useBoolean(true)
const { bool: footerVisible, toggle: toggleFooterVisible } = useBoolean(true)
const { bool: fixedTop, toggle: toggleFixedTop } = useBoolean(true)
const { bool: fixedFooter, toggle: toggleFixedFooter } = useBoolean(true)
const { bool: siderCollapse, toggle: toggleSiderCollapse } = useBoolean(true)
const { bool: rightFooter, toggle: toggleRightFooter } = useBoolean()
const { bool: full, toggle: toggleFull } = useBoolean()

function scrollEl() {
  const dom = document.querySelector(`#${LAYOUT_SCROLL_EL_ID}`)
  dom?.scrollTo({ top: 100, behavior: 'smooth' })
}
</script>

<template>
  <div class="h-480px px-12px top-200px left-40px w-320px z-101 config-card fixed overflow-auto whitespace-nowrap">
    <div class="flex">
      <div class="flex-1">
        <div class="font-bold">
          layoutMode:
        </div>
        <div v-for="item in layoutModeList" :key="item">
          <span class="pr-8px">{{ item }}</span>
          <input
            type="radio"
            name="layoutMode"
            :value="item"
            :checked="item === layoutMode"
            class="cursor-pointer"
            @change="setLayoutMode(item)"
          >
        </div>
      </div>
      <div class="flex-1">
        <div class="font-bold">
          scrollMode:
        </div>
        <div v-for="item in scrollModeList" :key="item">
          <span class="pr-8px">{{ item }}</span>
          <input
            type="radio"
            name="scrollMode"
            :value="item"
            :checked="item === scrollMode"
            class="cursor-pointer"
            @change="setScrollMode(item)"
          >
        </div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="pt-24px w-1/2">
        <span class="pr-8px">headerVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="headerVisible" @change="toggleHeaderVisible">
      </div>
      <div class="pt-24px w-1/2">
        <span class="pr-8px">tabVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="tabVisible" @change="toggleTabVisible">
      </div>
      <div class="pt-24px w-1/2">
        <span class="pr-8px">siderVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="siderVisible" @change="toggleSiderVisible">
      </div>
      <div class="pt-24px w-1/2">
        <span class="pr-8px">footerVisible</span>
        <input class="cursor-pointer" type="checkbox" :checked="footerVisible" @change="toggleFooterVisible">
      </div>
      <div class="pt-24px w-1/2">
        <span class="pr-8px">fixedTop</span>
        <input class="cursor-pointer" type="checkbox" :checked="fixedTop" @change="toggleFixedTop">
      </div>
      <div class="pt-24px w-1/2">
        <span class="pr-8px">fixedFooter</span>
        <input class="cursor-pointer" type="checkbox" :checked="fixedFooter" @change="toggleFixedFooter">
      </div>
      <div class="pt-24px w-1/2">
        <span class="pr-8px">siderCollapse</span>
        <input class="cursor-pointer" type="checkbox" :checked="siderCollapse" @change="toggleSiderCollapse">
      </div>
      <div class="pt-24px">
        <span class="pr-8px">rightFooter</span>
        <input class="cursor-pointer" type="checkbox" :checked="rightFooter" @change="toggleRightFooter">
      </div>
      <div class="pt-24px w-1/2">
        <span class="pr-8px">full content</span>
        <input class="cursor-pointer" type="checkbox" :checked="full" @change="toggleFull">
      </div>
    </div>
    <div class="pt-24px">
      <button @click="scrollEl">
        滚动
      </button>
    </div>
  </div>
</template>
