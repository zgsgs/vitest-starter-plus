import { computed, watch } from 'vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useAppStore, useThemeStore } from '@/store'

type LayoutMode = 'vertical' | 'horizontal'
type LayoutHeaderProps = Record<UnionKey.ThemeLayoutMode, App.GlobalHeaderProps>

export function useBasicLayout() {
  const app = useAppStore()
  const theme = useThemeStore()
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const mode = computed(() => {
    const vertical: LayoutMode = 'vertical'
    const horizontal: LayoutMode = 'horizontal'
    return theme.layout.mode.includes(vertical) ? vertical : horizontal
  })

  const isMobile = breakpoints.smaller('sm')

  const layoutHeaderProps: LayoutHeaderProps = {
    'vertical': {
      showLogo: false,
      showHeaderMenu: false,
      showMenuCollapse: true,
    },
    'vertical-mix': {
      showLogo: false,
      showHeaderMenu: false,
      showMenuCollapse: false,
    },
    'horizontal': {
      showLogo: true,
      showHeaderMenu: true,
      showMenuCollapse: false,
    },
    'horizontal-mix': {
      showLogo: true,
      showHeaderMenu: false,
      showMenuCollapse: true,
    },
  }

  const headerProps = computed(() => layoutHeaderProps[theme.layout.mode])

  const siderVisible = computed(() => theme.layout.mode !== 'horizontal')
  const siderWidth = computed(() => {
    const { width, mixWidth, mixChildMenuWidth } = theme.sider
    const isVerticalMix = theme.layout.mode === 'vertical-mix'
    let siderWidth = isVerticalMix ? mixWidth : width
    if (isVerticalMix && app.mixSiderFixed)
      siderWidth += mixChildMenuWidth

    return siderWidth
  })
  const siderCollapsedWidth = computed(() => {
    const { collapsedWidth, mixCollapsedWidth, mixChildMenuWidth } = theme.sider
    const isVerticalMix = theme.layout.mode === 'vertical-mix'
    let siderCollapsedWidth = isVerticalMix ? mixCollapsedWidth : collapsedWidth
    if (isVerticalMix && app.mixSiderFixed)
      siderCollapsedWidth += mixChildMenuWidth

    return siderCollapsedWidth
  })

  watch(
    isMobile,
    (newValue) => {
      if (newValue)
        app.setSiderCollapse(true)
    },
    { immediate: true },
  )

  return {
    mode,
    isMobile,
    headerProps,
    siderVisible,
    siderWidth,
    siderCollapsedWidth,
  }
}
