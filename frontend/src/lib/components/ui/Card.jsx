import './Card.css'

// 通用面板容器：标题 + 右侧操作区 + 内容；被各业务模块复用
export default function Card({ title, extra, glow = false, className = '', children }) {
  return (
    <section className={`card ${className}`}>
      {glow && <span className="glow" />}
      {(title || extra) && (
        <div className="panel-title">
          {title && <h3>{title}</h3>}
          {extra && <span className="tag">{extra}</span>}
        </div>
      )}
      {children}
    </section>
  )
}
