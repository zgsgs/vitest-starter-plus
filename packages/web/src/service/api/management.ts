import { mockRequest } from '../request'
import { adapter } from '../utils'
import { adapterOfFetchUserList } from './management.adapter'

/** 获取用户列表 */
export async function fetchUserList() {
  const data = await mockRequest.post<ApiUserManagement.User[] | null>('/getAllUserList')
  return adapter(adapterOfFetchUserList, data)
}
