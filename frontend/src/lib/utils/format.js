// 通用格式化工具
export const formatNumber = (n) => (typeof n === 'number' ? n.toLocaleString('zh-CN') : n)

export const formatDate = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

export const formatPercent = (n) => `${n}%`
