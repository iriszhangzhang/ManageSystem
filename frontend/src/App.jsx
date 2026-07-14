import { useEffect, useState } from 'react'
import AdminLayout from './lib/layout/AdminLayout'
import { brand, topNav, menu } from './config'
import { pages } from './config/pages'
import { getUser } from './services/dashboard'

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard')
  const [user, setUser] = useState({ name: '司辰' })

  useEffect(() => {
    getUser().then(setUser)
  }, [])

  const Page = pages[activeMenu]

  return (
    <AdminLayout
      brand={brand}
      user={user}
      menu={menu}
      topNav={topNav}
      active={activeMenu}
      onSelect={setActiveMenu}
    >
      {Page ? (
        <Page />
      ) : (
        <div style={{ color: 'var(--text-muted)', paddingTop: 40 }}>
          模块「{activeMenu}」开发中，敬请期待。
        </div>
      )}
    </AdminLayout>
  )
}
