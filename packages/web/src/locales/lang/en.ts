import type { LocaleMessages } from 'vue-i18n'

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'TodoTaskAdmin',
    },
    routes: {
      dashboard: {
        dashboard: 'Dashboard',
        analysis: 'Analysis',
        workbench: 'Workbench',
      },
      about: {
        about: 'About',
      },
      login: {
        login: 'Login',
      },
      constantPage: {
        constantPage: 'Constant Page',
      },
      403: {
        403: 'Forbidden',
      },
      404: {
        404: 'Not found',
      },
      500: {
        500: 'Internal server error',
      },
    },
    common: {
      copy: 'Copy',
      read: 'Read',
    },
    http: {
      200: 'Success',
      400: 'Invalid param',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not found',
      500: 'Internal server error',
      503: 'Service busy',
      0: 'OK',
      1001: 'Some custom error msg',
      4001: 'Parameter verification failed',
    },
  },
}
export default locale
