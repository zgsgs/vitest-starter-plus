<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutProps } from './types'
import { LAYOUT_MAX_Z_INDEX, LAYOUT_SCROLL_EL_ID, createLayoutCssVars } from './shared'
import style from './index.module.css'

const props = withDefaults(defineProps<LayoutProps>(), {
  mode: 'vertical',
  scrollMode: 'content',
  scrollElId: LAYOUT_SCROLL_EL_ID,
  commonClass: 'transition-all-300',
  fixedTop: true,
  maxZIndex: LAYOUT_MAX_Z_INDEX,
  headerVisible: true,
  headerHeight: 56,
  tabVisible: true,
  tabHeight: 48,
  siderVisible: true,
  siderCollapse: false,
  siderWidth: 220,
  siderCollapsedWidth: 64,
  footerVisible: true,
  footerHeight: 48,
  rightFooter: false,
})

const emit = defineEmits<Emits>()

defineOptions({
  name: 'AdminLayout',
})

interface Emits {
  /** 点击移动端模式下的蒙层 */
  (e: 'click-mobile-sider-mask'): void
}

type SlotFn = (props?: Record<string, unknown>) => any

interface Slots {
  /** 插槽：主体 */
  default?: SlotFn
  /** 插槽：头部 */
  header?: SlotFn
  /** 插槽：页签 */
  tab?: SlotFn
  /** 插槽：侧边栏 */
  sider?: SlotFn
  /** 插槽：底部 */
  footer?: SlotFn
}
const slots = defineSlots<Slots>()

/** CSS 变量 */
const cssVars = computed(() => createLayoutCssVars(props))

// 各部分的可见性
const showHeader = computed(() => Boolean(slots.header) && props.headerVisible)
const showTab = computed(() => Boolean(slots.tab) && props.tabVisible)
const showSider = computed(() => !props.isMobile && Boolean(slots.sider) && props.siderVisible)
const showMobileSider = computed(() => props.isMobile && Boolean(slots.sider) && props.siderVisible)
const showFooter = computed(() => Boolean(slots.footer) && props.footerVisible)

// 滚动模式
const isWrapperScroll = computed(() => props.scrollMode === 'wrapper')
const isContentScroll = computed(() => props.scrollMode === 'content')

// 布局模式：水平、垂直
const isVertical = computed(() => props.mode === 'vertical')
const isHorizontal = computed(() => props.mode === 'horizontal')

/** 固定头部和页签 */
const fixedHeaderAndTab = computed(() => props.fixedTop || (isHorizontal.value && isWrapperScroll.value))

// class样式

const leftGapClass = computed(() => {
  if (!props.fullContent && showSider.value)
    return props.siderCollapse ? style['left-gap_collapsed'] : style['left-gap']

  return ''
})

const headerLeftGapClass = computed(() => (isVertical.value ? leftGapClass.value : ''))

const footerLeftGapClass = computed(() => {
  const condition1 = isVertical.value
  const condition2 = isHorizontal.value && isWrapperScroll.value && !props.fixedFooter
  const condition3 = Boolean(isHorizontal.value && props.rightFooter)

  if (condition1 || condition2 || condition3)
    return leftGapClass.value

  return ''
})

const siderPaddingClass = computed(() => {
  let cls = ''

  if (showHeader.value && !headerLeftGapClass.value)
    cls += style['sider-padding-top']

  if (showFooter.value && !footerLeftGapClass.value)
    cls += ` ${style['sider-padding-bottom']}`

  return cls
})

function handleClickMask() {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('click-mobile-sider-mask')
}
</script>

<template>
  <div class="h-full :soy: relative" :class="[commonClass]" :style="cssVars">
    <div
      :id="isWrapperScroll ? scrollElId : undefined"
      class="flex flex-col h-full :soy:" :class="[
        commonClass,
        scrollWrapperClass,
        { ':soy: overflow-y-auto': isWrapperScroll },
      ]"
    >
      <!-- 头部 -->
      <template v-if="showHeader">
        <header
          v-show="!fullContent"
          class="flex-shrink-0 :soy:" :class="[
            style['layout-header'],
            commonClass,
            headerClass,
            headerLeftGapClass,
            { ':soy: absolute top-0 left-0 w-full': fixedHeaderAndTab },
          ]"
        >
          <slot name="header" />
        </header>
        <div
          v-show="!fullContent && fixedHeaderAndTab"
          class="flex-shrink-0 :soy: overflow-hidden" :class="[style['layout-header-placement']]"
        />
      </template>

      <!-- 页签 -->
      <template v-if="showTab">
        <div
          v-show="!fullContent"
          class="flex-shrink-0 :soy:" :class="[
            style['layout-tab'],
            commonClass,
            tabClass,
            { 'top-0!': !showHeader },
            leftGapClass,
            { ':soy: absolute left-0 w-full': fixedHeaderAndTab },
          ]"
        >
          <slot name="tab" />
        </div>
        <div
          v-show="!fullContent && fixedHeaderAndTab"
          class="flex-shrink-0 :soy: overflow-hidden" :class="[style['layout-tab-placement']]"
        />
      </template>

      <!-- 侧边栏 -->
      <template v-if="showSider">
        <aside
          v-show="!fullContent"
          class="h-full top-0 left-0 :soy: absolute" :class="[
            commonClass,
            siderClass,
            siderPaddingClass,
            siderCollapse ? style['layout-sider_collapsed'] : style['layout-sider'],
          ]"
        >
          <slot name="sider" />
        </aside>
      </template>

      <!-- 移动端的侧边栏 -->
      <template v-if="showMobileSider">
        <aside
          class="bg-white h-full top-0 left-0 w-0 :soy: absolute" :class="[
            commonClass,
            mobileSiderClass,
            style['layout-mobile-sider'],
            siderCollapse ? 'overflow-hidden' : style['layout-sider'],
          ]"
        >
          <slot name="sider" />
        </aside>
        <div
          v-show="!siderCollapse"
          class="h-full bg-[rgba(0,0,0,0.2)] w-full top-0 left-0 :soy: absolute" :class="[style['layout-mobile-sider-mask']]"
          @click="handleClickMask"
        />
      </template>

      <!-- 主体 -->
      <main
        :id="isContentScroll ? scrollElId : undefined"
        class="flex flex-col flex-grow :soy:" :class="[
          commonClass,
          contentClass,
          leftGapClass,
          { ':soy: overflow-y-auto': isContentScroll },
        ]"
      >
        <slot />
      </main>

      <!-- 底部 -->
      <template v-if="showFooter">
        <footer
          v-show="!fullContent"
          class="flex-shrink-0 :soy:" :class="[
            style['layout-footer'],
            commonClass,
            footerClass,
            footerLeftGapClass,
            { ':soy: absolute left-0 bottom-0 w-full': fixedFooter },
          ]"
        >
          <slot name="footer" />
        </footer>
        <div
          v-show="!fullContent && fixedFooter"
          class="flex-shrink-0 :soy: overflow-hidden" :class="[style['layout-footer-placement']]"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
