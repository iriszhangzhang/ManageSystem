import { mockApi } from '../mock/data'

// 仪表盘业务接口：当前走 mock，后续改为 return request('/api/overview')
export function getOverview() {
  return mockApi.getOverview()
}

export function getUser() {
  return mockApi.getUser()
}
