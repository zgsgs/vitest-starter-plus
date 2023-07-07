import path from 'node:path'

export const rootPath = path.resolve(process.cwd())

export const srcPath = `${rootPath}/src`
export const testPath = `${rootPath}/test`
export const typesPath = `${rootPath}/src/types`
export const setupFilesPath = `${rootPath}/test/setupFiles/index.ts`
export const localIconPath = `${rootPath}/src/assets/svg-icon`

/**
   * 获取相对路径
   * @param path 相对根目录的路径
   * @returns
   */
export function getRootPath(path: string) {
  return `${rootPath}/${path}`
}
