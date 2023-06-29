import path from 'node:path'

export function usePath() {
  const rootPath = path.resolve(process.cwd())

  const hashMap = {
    srcPath: `${rootPath}/src`,
    testPath: `${rootPath}/test`,
    typesPath: `${rootPath}/src/types`,
    setupFilesPath: `${rootPath}/test/setupFiles/index.ts`,
    localIconPath: `${rootPath}/src/assets/svg-icon`,
  }

  /**
   * 获取相对路径
   * @param path 相对根目录的路径
   * @returns
   */
  function getRootPath(path: string) {
    return `${rootPath}/${path}`
  }

  return {
    rootPath,
    ...hashMap,
    getRootPath,
  }
}
