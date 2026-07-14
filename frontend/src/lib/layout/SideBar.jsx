import { MenuIcon } from '../components/icons/Icons'

export default function SideBar({ menu, active, onSelect }) {
  return (
    <aside className="sidebar">
      {menu.map((g) => (
        <div key={g.group}>
          <div className="menu-group">{g.group}</div>
          {g.items.map((it) => (
            <div
              key={it.key}
              className={`menu-item ${active === it.key ? 'active' : ''}`}
              onClick={() => onSelect(it.key)}
            >
              <MenuIcon name={it.icon} />
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      ))}
    </aside>
  )
}
