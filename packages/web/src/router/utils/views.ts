import type { RouteComponent } from 'vue-router'

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  '403': () => import('@/views/_builtin/403'),
  '404': () => import('@/views/_builtin/404'),
  '500': () => import('@/views/_builtin/500'),
  'not-found': () => import('@/views/_builtin/not-found'),
  'constant-page': () => import('@/views/_builtin/constant-page'),
  'login': () => import('@/views/_builtin/login/index.vue'),
  'about': () => import('@/views/about/index.vue'),
  'auth-demo_permission': () => import('@/views/about/index.vue'),
  'auth-demo_super': () => import('@/views/about/index.vue'),
  'component_button': () => import('@/views/about/index.vue'),
  'component_card': () => import('@/views/about/index.vue'),
  'component_table': () => import('@/views/about/index.vue'),
  'dashboard_analysis': () => import('@/views/about/index.vue'),
  'dashboard_workbench': () => import('@/views/about/index.vue'),
  'document_naive': () => import('@/views/about/index.vue'),
  'document_project-link': () => import('@/views/about/index.vue'),
  'document_project': () => import('@/views/about/index.vue'),
  'document_vite': () => import('@/views/about/index.vue'),
  'document_vue': () => import('@/views/about/index.vue'),
  'exception_403': () => import('@/views/about/index.vue'),
  'exception_404': () => import('@/views/about/index.vue'),
  'exception_500': () => import('@/views/about/index.vue'),
  'function_tab-detail': () => import('@/views/about/index.vue'),
  'function_tab-multi-detail': () => import('@/views/about/index.vue'),
  'function_tab': () => import('@/views/about/index.vue'),
  'function_websocket': () => import('@/views/about/index.vue'),
  'management_auth': () => import('@/views/about/index.vue'),
  'management_role': () => import('@/views/about/index.vue'),
  'management_route': () => import('@/views/about/index.vue'),
  'management_user': () => import('@/views/about/index.vue'),
  'multi-menu_first_second-new_third': () => import('@/views/about/index.vue'),
  'multi-menu_first_second': () => import('@/views/about/index.vue'),
  'plugin_charts_antv': () => import('@/views/about/index.vue'),
  'plugin_charts_echarts': () => import('@/views/about/index.vue'),
  'plugin_copy': () => import('@/views/about/index.vue'),
  'plugin_editor_markdown': () => import('@/views/about/index.vue'),
  'plugin_editor_quill': () => import('@/views/about/index.vue'),
  'plugin_icon': () => import('@/views/about/index.vue'),
  'plugin_map': () => import('@/views/about/index.vue'),
  'plugin_print': () => import('@/views/about/index.vue'),
  'plugin_swiper': () => import('@/views/about/index.vue'),
  'plugin_video': () => import('@/views/about/index.vue'),
}
