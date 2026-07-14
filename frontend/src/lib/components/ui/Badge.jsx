import './Badge.css'

// 状态徽标：ok / run / warn 三种语义色，可扩展
export default function Badge({ type = 'ok', children }) {
  return <span className={`badge ${type}`}>{children}</span>
}
