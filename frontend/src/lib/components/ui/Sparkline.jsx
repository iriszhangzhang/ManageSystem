// 迷你折线图：纯 SVG，业务传数组即可
export default function Sparkline({ data = [4, 10, 6, 14, 9, 18, 12, 20], width = 64, height = 28 }) {
  const max = Math.max(...data, 1)
  const stepX = width / (data.length - 1)
  const points = data
    .map((v, i) => `${(i * stepX).toFixed(1)},${(height - (v / max) * (height - 6) - 3).toFixed(1)}`)
    .join(' ')
  return (
    <svg className="spark" viewBox={`0 0 ${width} ${height}`} fill="none">
      <polyline points={points} stroke="#5fa0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
