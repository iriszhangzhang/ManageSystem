import RuyiEmblem from '../components/RuyiEmblem'

export default function TopBar({ brand, user, nav }) {
  return (
    <header className="topbar">
      <div className="brand">
        <RuyiEmblem />
        <div className="title">
          {brand.prefix}
          <span className="accent">·</span>
          {brand.suffix}
        </div>
      </div>
      <div className="topbar-right">
        <nav className="topbar-nav">
          {nav.map((n, i) => (
            <div key={n} className={`nav-item ${i === 0 ? 'active' : ''}`}>
              {n}
            </div>
          ))}
        </nav>
        <div className="topbar-user">
          <div className="avatar">{user?.name?.[0] || '司'}</div>
          <div className="name">{user?.name || '司辰'}</div>
        </div>
      </div>
    </header>
  )
}
