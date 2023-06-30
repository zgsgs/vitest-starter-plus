import { toUrlParams } from './helper'

export const api = 'api'

export async function fetchLogin(userName: string, password: string) {
  return await fetch('/api/auth/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: toUrlParams({ userName, password }),
  })
}

export async function fetchUserInfo() {
  return await fetch('/api/users/info', {})
}
