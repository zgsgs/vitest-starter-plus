import path from 'node:path'

/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 */
export function getRootDir() {
  return path.resolve(process.cwd())
}

function getRootPath(path: string) {
  const rootPath = getRootDir()

  return `${rootPath}/${path}`
}

/**
 * 获取项目src路径
 * @param path - src目录名称(默认: "src")
 * @descrition 末尾不带斜杠
 */
export const getSrcPath = (path = 'src') => getRootPath(path)

/**
 * 获取项目 test 路径
 * @param path - test目录名称(默认: "test")
 * @descrition 末尾不带斜杠
 */
export const getTestPath = (path = 'test') => getRootPath(path)

/**
 * 获取项目 types 路径
 * @param path - types 目录名称(默认: "types")
 * @descrition 末尾不带斜杠
 */
export const getTypesPath = (path = 'types') => getRootPath(path)
