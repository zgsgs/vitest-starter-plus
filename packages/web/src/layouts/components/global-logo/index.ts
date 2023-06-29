import { routePath } from '@/router'
import { setLocale } from '@/locales'
import { languageType } from '@/constants'
import { useBoolean } from '@/hooks'

export interface GlobalLogoProps {
  /** 显示名字 */
  showTitle: boolean
}

export function useGlobalLogo() {
  const { bool, toggle } = useBoolean()
  const routeHomePath = routePath('root')

  function toggleLocal() {
    toggle()
    setLocale(bool ? languageType.en : languageType.zh)
  }

  return {
    routeHomePath,
    toggleLocal,
  }
}
