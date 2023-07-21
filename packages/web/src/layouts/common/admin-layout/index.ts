import { install } from './utils'
import AdminLayout from './index.vue'
import { LAYOUT_MAX_Z_INDEX, LAYOUT_SCROLL_EL_ID } from './shared'

AdminLayout.install = install

export { AdminLayout, LAYOUT_MAX_Z_INDEX, LAYOUT_SCROLL_EL_ID }

export type { LayoutProps, LayoutMode, ScrollMode } from './types'
