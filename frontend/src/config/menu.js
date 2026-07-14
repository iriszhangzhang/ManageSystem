// 左侧菜单配置（配置驱动）：新增模块只在此追加，无需改动布局与组件
export const menu = [
  {
    group: '主控中心',
    items: [
      { key: 'dashboard', label: '仪表盘', icon: 'grid' },
      { key: 'monitor', label: '实时监测', icon: 'pulse' },
    ],
  },
  {
    group: '业务管理',
    items: [
      { key: 'users', label: '用户管理', icon: 'user' },
      { key: 'orders', label: '订单中心', icon: 'cart' },
      { key: 'assets', label: '资产台账', icon: 'box' },
    ],
  },
  {
    group: '智能系统',
    items: [
      { key: 'ai', label: 'AI 引擎', icon: 'spark' },
      { key: 'logs', label: '日志审计', icon: 'doc' },
      { key: 'setting', label: '系统设置', icon: 'gear' },
    ],
  },
]
