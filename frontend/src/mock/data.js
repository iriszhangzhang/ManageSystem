// 接口采用 mock 的方式实现，后续可替换为真实 Gin 后端接口

function delay(data, ms = 260) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms))
}

export const mockApi = {
  // 仪表盘统计数据
  getOverview: () =>
    delay({
      stats: [
        { key: 'users', label: '在线用户', value: '8,642', delta: '+12.4%', dir: 'up' },
        { key: 'orders', label: '今日订单', value: '1,205', delta: '+5.1%', dir: 'up' },
        { key: 'revenue', label: '营业总额', value: '¥ 362.8k', delta: '+8.7%', dir: 'up' },
        { key: 'alerts', label: '告警事件', value: '17', delta: '-3.0%', dir: 'down' },
      ],
      trend: [42, 55, 48, 70, 62, 85, 78, 96, 88, 110, 102, 128],
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      tasks: [
        { id: 1, title: '数据同步任务', status: '进行中', pct: '68%', level: 'b' },
        { id: 2, title: '报表生成 - 月度', status: '已完成', pct: '100%', level: 'g' },
        { id: 3, title: '安全巡检', status: '待处理', pct: '24%', level: 'y' },
        { id: 4, title: '备份策略更新', status: '已完成', pct: '100%', level: 'g' },
      ],
      recent: [
        { id: 'A1001', name: '玉如意 · 旗舰版', owner: '张明', status: 'ok', time: '09:24' },
        { id: 'A1002', name: '云枢 · 控制台', owner: '李雷', status: 'run', time: '09:31' },
        { id: 'A1003', name: '风华 · 数据中枢', owner: '王芳', status: 'warn', time: '09:42' },
        { id: 'A1004', name: '青鸾 · 网关', owner: '陈静', status: 'ok', time: '09:55' },
        { id: 'A1005', name: '麒麟 · 调度引擎', owner: '刘洋', status: 'run', time: '10:08' },
      ],
    }),

  // 用户信息
  getUser: () =>
    delay({ name: '司辰', role: '系统管理员' }),
}
