import type { LocaleMessages } from 'vue-i18n'

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'TodoTask管理系统',
    },
    routes: {
      dashboard: {
        dashboard: '仪表盘',
        analysis: '分析页',
        workbench: '工作台',
      },
      about: {
        about: '关于',
      },
      login: {
        login: '登录',
      },
      constantPage: {
        constantPage: '固定页面',
      },
      403: {
        403: '无权限',
      },
      404: {
        404: '未找到',
      },
      500: {
        500: '服务器错误',
      },
    },
    common: {
      copy: '复制',
      read: '读取',
    },
    http: {
      200: '成功',
      400: '无效参数',
      401: '未经授权',
      403: '无权限',
      404: '未找到',
      500: '服务器错误',
      503: '服务繁忙',
      0: 'ok',
      1001: '一些自定义错误消息',
      4001: '参数验证失败',
    },
  },
}

export default locale
