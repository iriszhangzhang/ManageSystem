// 统一请求封装：USE_MOCK 控制走 mock 还是真实后端（Gin）
// 切换到真实后端时，将 USE_MOCK 置 false 并实现 fetch 逻辑即可
export const USE_MOCK = true

export async function request(path, options = {}) {
  if (USE_MOCK) {
    throw new Error('mock 模式下不调用真实接口，请使用 services 下的业务方法')
  }
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`请求失败: ${res.status}`)
  return res.json()
}
