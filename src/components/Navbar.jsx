import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Overview', icon: '▦' },
  { to: '/equipment', label: 'Equipment', icon: '◇' },
  { to: '/issue-desk', label: 'Issue Desk', icon: '▤' },
  { to: '/manage', label: 'Inventory Control', icon: '▥' },
  { to: '/about', label: 'About', icon: 'ⓘ' },
  { to: '/contact', label: 'Contact', icon: '✉' },
]

function StatCard({ label, count, color, bg }) {
  return (
    <div className={`flex min-w-[112px] items-center gap-3 rounded-2xl border border-white/80 ${bg} px-3.5 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}>
      <span className={`h-3 w-3 shrink-0 rounded-full ${color} ring-4 ring-white/70`} />
      <div className="min-w-0">
        <p className="text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-500">
          {label}
        </p>
        <p className="mt-0.5 text-xl font-black leading-none text-slate-800">
          {count ?? 0}
        </p>
      </div>
    </div>
  )
}

export default function Navbar({ activeCount, returnedCount, onReset }) {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="relative isolate mx-auto max-w-[1600px] overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-sky-100 via-indigo-50 to-violet-100 shadow-[0_12px_40px_rgba(79,70,229,0.12)]">

        {/* Colorful background decorations */}
        <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl" />
        <div className="pointer-events-none absolute left-[35%] top-0 -z-10 h-48 w-64 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 -z-10 h-48 w-56 rounded-full bg-cyan-200/40 blur-3xl" />

        {/* Top row: brand and dashboard actions */}
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-4 px-5 pb-5 pt-5 sm:px-7 lg:px-9">

          {/* Brand */}
          <NavLink to="/" className="group flex shrink-0 items-center gap-3.5">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-[19px] bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 text-2xl font-black text-white shadow-[0_8px_22px_rgba(37,99,235,0.35)] transition duration-300 group-hover:rotate-3 group-hover:scale-105">
              L
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-[3px] border-indigo-50 bg-emerald-400" />
            </div>

            <div>
              <h1 className="text-[23px] font-black leading-tight tracking-[0.13em] text-slate-900">
                LOAN<span className="text-blue-600">LY</span>
              </h1>
              <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                Smart inventory management
              </p>
            </div>
          </NavLink>

          {/* Stats and reset */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <StatCard
                label="Borrowed"
                count={activeCount}
                color="bg-orange-400"
                bg="bg-orange-50/90"
              />

              <StatCard
                label="Returned"
                count={returnedCount}
                color="bg-emerald-400"
                bg="bg-emerald-50/90"
              />
            </div>

            <button
              type="button"
              onClick={onReset}
              className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-4 py-3 text-xs font-extrabold text-white shadow-[0_7px_20px_rgba(79,70,229,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(79,70,229,0.4)] active:scale-95 sm:px-5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <svg className="relative h-4 w-4 transition-transform duration-500 group-hover:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M20 7v5h-5M4 17v-5h5" />
                <path d="M5.6 9A7 7 0 0 1 18 6l2 6M4 12l2 6a7 7 0 0 0 12.4-3" />
              </svg>
              <span className="relative whitespace-nowrap">Reset Data</span>
            </button>
          </div>
        </div>

        {/* Separate navigation row: prevents overlap with the brand */}
        <div className="border-t border-white/70 bg-white/35 px-4 py-3 backdrop-blur-md sm:px-7 lg:px-9">
          <nav className="flex items-center gap-2 overflow-x-auto rounded-2xl border border-white/80 bg-white/55 p-1.5 shadow-[0_4px_16px_rgba(71,85,105,0.05)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {links.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `group relative flex shrink-0 items-center justify-center gap-2 rounded-xl px-3.5 py-3 text-xs font-bold transition-all duration-300 sm:px-5 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_5px_15px_rgba(37,99,235,0.25)]'
                      : 'text-slate-600 hover:bg-white hover:text-blue-700 hover:shadow-sm'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-base leading-none transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-white' : 'text-blue-600'}`}>
                      {icon}
                    </span>
                    <span className="whitespace-nowrap">{label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-[3px] w-5 -translate-x-1/2 translate-y-1 rounded-full bg-white/90" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
      </div>
    </header>
  )
}