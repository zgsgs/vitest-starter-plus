import { handleModuleRoutes } from '@/router/utils'

const modules = import.meta.glob('./static/**/*.ts', { eager: true }) as AuthRoute.RouteModule

export const staticRoutes = handleModuleRoutes(modules)

export * from './constant/_builtin'
