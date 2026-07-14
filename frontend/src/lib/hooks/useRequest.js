import { useEffect, useState } from 'react'

// 通用数据请求 hook：封装 loading/数据态，业务页直接 useRequest(apiFn)
export function useRequest(fn, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let alive = true
    setLoading(true)
    Promise.resolve(fn())
      .then((res) => {
        if (alive) {
          setData(res)
          setError(null)
        }
      })
      .catch((err) => {
        if (alive) setError(err)
      })
      .finally(() => {
        if (alive) setLoading(false)
      })
    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, loading, error }
}
