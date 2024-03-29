<script setup lang="ts">
import { AdminLayout } from '../components'
import { GlobalContent, GlobalFooter, GlobalHeader, GlobalSider, GlobalTab, SettingDrawer } from '../common'
import { useAppStore, useThemeStore } from '@/store'
import { useBasicLayout } from '@/hooks'

defineOptions({ name: 'BasicLayout' })

const app = useAppStore()
const theme = useThemeStore()

const { mode, isMobile, headerProps, siderVisible, siderWidth, siderCollapsedWidth } = useBasicLayout()
</script>

<template>
  <AdminLayout
    :mode="mode"
    :is-mobile="isMobile"
    :scroll-mode="theme.scrollMode"
    :scroll-el-id="app.scrollElId"
    :full-content="app.contentFull"
    :fixed-top="theme.fixedHeaderAndTab"
    :header-height="theme.header.height"
    :tab-visible="theme.tab.visible"
    :tab-height="theme.tab.height"
    :content-class="app.disableMainXScroll ? 'overflow-x-hidden' : ''"
    :sider-visible="siderVisible"
    :sider-collapse="app.siderCollapse"
    :sider-width="siderWidth"
    :sider-collapsed-width="siderCollapsedWidth"
    :footer-visible="theme.footer.visible"
    :fixed-footer="theme.footer.fixed"
    :right-footer="theme.footer.right"
    @click-mobile-sider-mask="app.setSiderCollapse(true)"
  >
    <template #header>
      <GlobalHeader v-bind="headerProps" />
    </template>
    <template #tab>
      <GlobalTab />
    </template>
    <template #sider>
      <GlobalSider />
    </template>
    <GlobalContent />
    <template #footer>
      <GlobalFooter />
    </template>
  </AdminLayout>
  <n-back-top :key="theme.scrollMode" :listen-to="`#${app.scrollElId}`" class="z-100" />
  <SettingDrawer />
</template>

<style lang="scss">
#__SCROLL_EL_ID__ {
  @include scrollbar(8px, #e1e1e1);
}

.dark #__SCROLL_EL_ID__ {
  @include scrollbar(8px, #555);
}
</style>
