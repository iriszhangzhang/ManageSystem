// 如意云纹徽标（SVG）— 国风科技蓝主题装饰，通用品牌组件
export default function RuyiEmblem({ size = 34 }) {
  return (
    <svg className="emblem" width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0" stopColor="#5fa0ff" />
          <stop offset="0.5" stopColor="#2f7cff" />
          <stop offset="1" stopColor="#36d6e7" />
        </linearGradient>
        <linearGradient id="rg2" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0" stopColor="#e6cd94" />
          <stop offset="1" stopColor="#d4b271" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="29" stroke="url(#rg2)" strokeWidth="2" opacity="0.7" />
      <path
        d="M20 40c-6 0-10-4-10-9 0-5 4-8 8-8 1 0 2 .3 3 .8C23 17 27 14 32 14s9 3 11 9.8c1-.5 2-.8 3-.8 4 0 8 3 8 8 0 5-4 9-10 9"
        stroke="url(#rg)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M26 40l6 8 6-8" stroke="url(#rg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="32" cy="38" r="3.4" fill="url(#rg2)" />
    </svg>
  )
}
