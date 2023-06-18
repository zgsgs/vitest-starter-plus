/** 默认缓存期限为7天 */
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7

/**
 * set the cookie
 * @param key 键名
 * @param value 值
 * @param expire 过期时间 默认 7 天
 * @param domain 域名
 */
export function setCookie(key: string, value: unknown, expire = DEFAULT_CACHE_TIME, domain = null) {
  let cookie = `${key}=${value}`
  if (expire) {
    const _expire = new Date().getTime() + expire * 1000
    cookie += `;expires=${new Date(_expire).toUTCString()}`
  }
  if (domain)
    cookie += `;domain=${domain}`

  document.cookie = cookie
}
/**
 * get the cookie by key
 * @param key 键名
 * @returns void
 */
export function getCookie(key: string) {
  const reg = RegExp(`${key}=([^;]+)`)
  const arr = document.cookie.match(reg)
  if (!arr)
    return ''
  return arr[1]
}

export function removeCookie(key: string, domain = null) {
  setCookie(key, '', -1, domain)
}
