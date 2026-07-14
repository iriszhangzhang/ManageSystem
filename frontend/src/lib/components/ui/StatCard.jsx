import Card from './Card'
import Sparkline from './Sparkline'
import './StatCard.css'

// 指标卡：标签 + 数值 + 同比 + 迷你折线，业务仅需传数据
export default function StatCard({ label, value, delta, dir = 'up', showSpark = true }) {
  return (
    <Card className="stat" glow>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      <div className={`delta ${dir}`}>{delta} 较昨日</div>
      {showSpark && <Sparkline />}
    </Card>
  )
}
