import { toRefs } from 'vue'
import type { Router } from 'vue-router'
import { getTabRouteByVueRoute } from './helper'

interface TabState {
  /** 多页签数据 */
  tabs: App.GlobalTabRoute[]
  /** 多页签首页 */
  homeTab: App.GlobalTabRoute
  /** 当前激活状态的页签(路由fullPath) */
  activeTab: string
}

export function useTab() {
  const state: TabState = reactive({
    tabs: [],
    homeTab: {
      name: 'root',
      fullPath: '/',
      meta: {
        title: 'Root',
      },
      scrollPosition: {
        left: 0,
        top: 0,
      },
    },
    activeTab: '',
  })
  function resetTabStore() {

  }
  /**
     * 初始化首页页签路由
     * @param routeHomeName - 路由首页的name
     * @param router - 路由实例
     */
  function initHomeTab(routeHomeName: string, router: Router) {
    const routes = router.getRoutes()
    const findHome = routes.find(item => item.name === routeHomeName)
    if (findHome && !findHome.children.length) {
      // 有子路由的不能作为Tab
      state.homeTab = getTabRouteByVueRoute(findHome)
    }
  }
  return {
    ...toRefs(state),
    resetTabStore,
    initHomeTab,
  }
}
