import './Button.css'

// 通用按钮：primary / default 两种风格
export default function Button({ variant = 'default', className = '', children, ...props }) {
  return (
    <button className={`ui-btn ${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}
