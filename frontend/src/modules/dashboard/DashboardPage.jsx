import { useRequest } from '../../lib/hooks/useRequest'
import { Card, StatCard, BarChart, DataTable, Badge } from '../../lib/components'
import { getOverview } from '../../services/dashboard'
import './DashboardPage.css'

const statusMap = { ok: '正常', run: '运行中', warn: '预警' }

const columns = [
  { key: 'id', title: '编号' },
  { key: 'name', title: '业务名称' },
  { key: 'owner', title: '负责人' },
  {
    key: 'status',
    title: '状态',
    render: (r) => <Badge type={r.status}>{statusMap[r.status]}</Badge>,
  },
  { key: 'time', title: '时间' },
]

// 业务模块：仪表盘。仅此文件依赖具体数据与布局，组件库与外壳无需改动
export default function DashboardPage() {
  const { data, loading } = useRequest(getOverview)

  if (loading || !data) {
    return <div className="dash-loading">正在加载数据…</div>
  }

  return (
    <div className="dashboard">
      <div className="page-head">
        <div>
          <h1>仪表盘</h1>
          <div className="sub">实时掌控全局业务态势 · AI 驱动决策中枢</div>
        </div>
        <div className="date-pill">今日 · 吉祥如意</div>
      </div>

      <div className="stat-grid">
        {data.stats.map((s) => (
          <StatCard key={s.key} label={s.label} value={s.value} delta={s.delta} dir={s.dir} />
        ))}
      </div>

      <div className="panels">
        <Card title="全年业务趋势" extra="单位：万次">
          <BarChart data={data.trend} labels={data.months} />
        </Card>
        <Card title="任务进度" extra="实时">
          <div className="tasks">
            {data.tasks.map((t) => (
              <div className="task" key={t.id}>
                <span className={`dot ${t.level}`} />
                <div className="info">
                  <div className="t">{t.title}</div>
                  <div className="s">{t.status}</div>
                </div>
                <div className="pct">{t.pct}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card title="近期业务动态" extra="最新 5 条" className="mt">
        <DataTable columns={columns} data={data.recent} />
      </Card>

      <div className="scroll-hint">— 内容区已超出，可继续向下滚动 —</div>
    </div>
  )
}
