// eslint-disable-next-line unicorn/prefer-node-protocol
import path from 'path'

/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 */
export function getRootPath() {
  return path.resolve(process.cwd())
}

/**
 * 获取项目src路径
 * @param srcName - src目录名称(默认: "src")
 * @descrition 末尾不带斜杠
 */
export function getSrcPath(srcName = 'src') {
  const rootPath = getRootPath()

  return `${rootPath}/${srcName}`
}

export function usePath() {
  const rootPath = getRootPath()

  const srcPath = `${rootPath}/src`
  const testPath = `${rootPath}/test`
  const typesPath = `${rootPath}/src/types`
  const setupFilesPath = `${rootPath}/test/setupFiles/index.ts`
  const localIconPath = `${rootPath}/src/assets/svg-icon`
  return {
    rootPath,
    srcPath,
    testPath,
    typesPath,
    setupFilesPath,
    localIconPath,
    getRootPath,
    getSrcPath,
  }
}
