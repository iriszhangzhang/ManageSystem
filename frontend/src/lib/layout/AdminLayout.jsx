import TopBar from './TopBar'
import SideBar from './SideBar'
import './AdminLayout.css'

// 通用后台外壳：顶部固定 + 左侧固定 + 内容自适应滚动
// 业务与主题由此壳统一承载，二次开发无需改动此处
export default function AdminLayout({ brand, user, menu, topNav, active, onSelect, children }) {
  return (
    <div className="app">
      <TopBar brand={brand} user={user} nav={topNav} />
      <div className="body">
        <SideBar menu={menu} active={active} onSelect={onSelect} />
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
