import type { KebabCase, LayoutProps } from './types'

/** 布局组件的滚动元素id默认值 */
export const LAYOUT_SCROLL_EL_ID = '__SCROLL_EL_ID__'

/**
 * @deprecated 请使用 LAYOUT_SCROLL_EL_ID
 */
export const SCROLL_EL_ID = LAYOUT_SCROLL_EL_ID

/** 最大的zIndex值 */
export const LAYOUT_MAX_Z_INDEX = 100

type Prefix = '--un-'

type CssVarsProps = Pick<
  LayoutProps,
  'headerHeight' | 'tabHeight' | 'siderWidth' | 'siderCollapsedWidth' | 'footerHeight'
> & {
  headerZIndex?: number
  tabZIndex?: number
  siderZIndex?: number
  mobileSiderZIndex?: number
  footerZIndex?: number
}

type CssVars = {
  [K in keyof CssVarsProps as `${Prefix}${KebabCase<K>}`]: string | number;
}

function createCssVars(props: CssVarsProps) {
  const cssVars: CssVars = {
    '--un-header-height': `${props.headerHeight}px`,
    '--un-header-z-index': props.headerZIndex,
    '--un-tab-height': `${props.tabHeight}px`,
    '--un-tab-z-index': props.tabZIndex,
    '--un-sider-width': `${props.siderWidth}px`,
    '--un-sider-collapsed-width': `${props.siderCollapsedWidth}px`,
    '--un-sider-z-index': props.siderZIndex,
    '--un-mobile-sider-z-index': props.mobileSiderZIndex,
    '--un-footer-height': `${props.footerHeight}px`,
    '--un-footer-z-index': props.footerZIndex,
  }

  return cssVars
}

export function createLayoutCssVars(props: LayoutProps) {
  const {
    mode,
    isMobile,
    maxZIndex = LAYOUT_MAX_Z_INDEX,
    headerHeight,
    tabHeight,
    siderWidth,
    siderCollapsedWidth,
    footerHeight,
  } = props

  const headerZIndex = maxZIndex - 3
  const tabZIndex = maxZIndex - 5
  const siderZIndex = (mode === 'vertical' || isMobile) ? maxZIndex - 1 : maxZIndex - 4
  const mobileSiderZIndex = isMobile ? maxZIndex - 2 : 0
  const footerZIndex = maxZIndex - 5

  const cssProps: CssVarsProps = {
    headerHeight,
    headerZIndex,
    tabHeight,
    tabZIndex,
    siderWidth,
    siderZIndex,
    mobileSiderZIndex,
    siderCollapsedWidth,
    footerHeight,
    footerZIndex,
  }

  return createCssVars(cssProps)
}
