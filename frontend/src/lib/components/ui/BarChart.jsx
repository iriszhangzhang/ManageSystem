import './BarChart.css'

// 柱状趋势图：data 为数值数组，labels 为对应标签
export default function BarChart({ data = [], labels = [] }) {
  const max = Math.max(...data, 1)
  return (
    <div className="bars">
      {data.map((v, i) => (
        <div className="bar-col" key={i}>
          <div className="bar" style={{ height: `${(v / max) * 100}%` }} />
          <div className="x">{labels[i]}</div>
        </div>
      ))}
    </div>
  )
}
