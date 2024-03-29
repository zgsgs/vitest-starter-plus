/**
 * 头部配置
 */
interface HeaderConfig {
  /**
   * 头部可见
   * @default true
   */
  headerVisible?: boolean
  /**
   * 头部样式名
   * @default ''
   */
  headerClass?: string
  /**
   * 头部高度
   * @default 56px
   */
  headerHeight?: number
}

/**
 * Tab页签配置
 */
interface TabConfig {
  /**
   * Tab页签可见
   * @default true
   */
  tabVisible?: boolean
  /**
   * Tab页签样式名
   * @default ''
   */
  tabClass?: string
  /**
   * Tab页签高度
   * @default 48px
   */
  tabHeight?: number
}

/**
 * 侧边栏配置
 */
interface SiderConfig {
  /**
   * 侧边栏可见
   * @default true
   */
  siderVisible?: boolean
  /**
   * 侧边栏样式名
   * @default ''
   */
  siderClass?: string
  /**
   * 移动端的侧边栏样式名
   * @default ''
   */
  mobileSiderClass?: string
  /**
   * 侧边栏折叠状态
   * @default false
   */
  siderCollapse?: boolean
  /**
   * 侧边栏未折叠时的宽度
   * @default 220px
   */
  siderWidth?: number
  /**
   * 侧边栏折叠时的宽度
   * @default 64px
   */
  siderCollapsedWidth?: number
}

/**
 * 主体内容配置
 */
export interface ContentConfig {
  /**
   * 主体内容样式名
   * @default ''
   */
  contentClass?: string
  /**
   * 主体内容是否全屏铺满
   * @description 铺满时，其他元素通过display: none进行隐藏
   */
  fullContent?: boolean
}

/**
 * 底部配置
 */
export interface FooterConfig {
  /**
   * 底部可见
   * @default true
   */
  footerVisible?: boolean
  /**
   * 固定底部
   * @default true
   */
  fixedFooter?: boolean
  /**
   * 底部样式名
   * @default ''
   */
  footerClass?: string
  /**
   * 底部的高度
   * @default 48px
   */
  footerHeight?: number
  /**
   * 底部是否局右
   * @description 布局为vertical时起作用
   */
  rightFooter?: boolean
}

/**
 * 布局模式
 * - horizontal 水平
 * - vertical 垂直
 */
export type LayoutMode = 'horizontal' | 'vertical'

/**
 * 内容溢出时的出现滚动条的方式
 * - wrapper 布局组件最外层的元素出现滚动条
 * - content 主体内容组件出现滚动条
 * @default 默认 wrapper
 */
export type ScrollMode = 'wrapper' | 'content'

/**
 * 布局组件的属性
 */
export interface LayoutProps extends HeaderConfig, TabConfig, SiderConfig, ContentConfig, FooterConfig {
  /**
   * 布局模式
   * - {@link LayoutMode}
   */
  mode?: LayoutMode
  /** 是否是移动端 */
  isMobile?: boolean
  /**
   * 内容溢出时的出现滚动条的方式
   * - {@link ScrollMode}
   */
  scrollMode?: ScrollMode
  /**
   * 滚动元素的ID
   * @description 可用于获取对应的Dom，使其滚动
   * @default 默认: const adminLayoutScrollElId = '__ADMIN_LAYOUT_SCROLL_EL_ID__'
   * @example 使用导出的默认ID
   * ```ts
   * import { adminLayoutScrollElId } from '@soybeanjs/vue-materials';
   * ```
   */
  scrollElId?: string
  /**
   * 滚动元素的的样式class
   */
  scrollElClass?: string
  /** 外层滚动容器的样式 */
  scrollWrapperClass?: string
  /**
   * 通用的样式名称
   * - 可以用来配置过渡动画的样式
   * @default 'transition-all-300'
   */
  commonClass?: string
  /**
   * 固定上面的头部和Tab页签部分
   * @default true
   */
  fixedTop?: boolean
  /** Header,Tab,Sider和Footer的zIndex取值不超过该值 */
  maxZIndex?: number
}

type Kebab<S extends string> = S extends Uncapitalize<S> ? S : `-${Uncapitalize<S>}`

export type KebabCase<S extends string> = S extends `${infer Start}${infer End}`
  ? `${Uncapitalize<Start>}${KebabCase<Kebab<End>>}`
  : S
