import path from 'node:path'

export function usePath() {
  const rootPath = path.resolve(process.cwd())
  const srcPath = `${rootPath}/src`
  const testPath = `${rootPath}/test`
  const typesPath = `${rootPath}/src/types`
  const setupFilesPath = `${testPath}/setupFiles/index.ts`
  const localIconPath = `${srcPath}/assets/svg-icon`

  function getRootPath(path: string) {
    return `${rootPath}/${path}`
  }

  return {
    rootPath,
    srcPath,
    testPath,
    typesPath,
    setupFilesPath,
    localIconPath,
    getRootPath,
  }
}
