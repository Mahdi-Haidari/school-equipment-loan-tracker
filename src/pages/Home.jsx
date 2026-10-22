import { Link } from 'react-router-dom'

const features = [
  {
    number: '01',
    icon: '▦',
    title: 'Smart Inventory',
    description:
      'Keep equipment organized and get a clearer view of your available stock.',
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-100 text-blue-700',
    glow: 'group-hover:shadow-blue-200/60',
  },
  {
    number: '02',
    icon: '↗',
    title: 'Controlled Lending',
    description:
      'Manage equipment distribution and keep borrowing records organized.',
    color: 'from-violet-500 to-purple-600',
    iconBg: 'bg-violet-100 text-violet-700',
    glow: 'group-hover:shadow-violet-200/60',
  },
  {
    number: '03',
    icon: '✓',
    title: 'Reliable Records',
    description:
      'Track returns and maintain consistent records of equipment activity.',
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-100 text-emerald-700',
    glow: 'group-hover:shadow-emerald-200/60',
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-[1500px] space-y-10 pb-6">

      {/* Hero */}
      <section className="relative isolate overflow-hidden rounded-[30px] border border-white/80 bg-gradient-to-br from-sky-100 via-indigo-50 to-violet-100 shadow-[0_15px_50px_rgba(79,70,229,0.10)]">

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="pointer-events-none absolute right-[20%] top-1/3 -z-10 h-64 w-64 rounded-full bg-violet-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 -z-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-16">

          {/* Hero content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-600">
                Equipment Management System
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.13] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
              Manage Assets.
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Move Smarter.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              A smarter way to organize school equipment, manage lending,
              and track returns. Keep your inventory records clear and your
              daily operations under control with LOANLY.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/issue-desk"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-xs font-extrabold text-white shadow-[0_8px_22px_rgba(37,99,235,0.27)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_13px_28px_rgba(79,70,229,0.35)] active:scale-[0.98]"
              >
                <span>Launch Issue Desk</span>
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>

              <Link
                to="/equipment"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/90 bg-white/70 px-5 py-4 text-xs font-extrabold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-700 hover:shadow-md"
              >
                <svg className="h-4 w-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                  <path d="m3 8 9 5 9-5M3 13l9 5 9-5M3 18l9 5 9-5" />
                </svg>
                Explore Equipment
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-bold text-slate-500">
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
                Organized records
              </span>
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">✓</span>
                Simple workflows
              </span>
            </div>
          </div>

          {/* Decorative dashboard illustration */}
          <div className="relative mx-auto w-full max-w-[420px] lg:ml-auto">
            <div className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-violet-300/30 blur-2xl" />
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-blue-300/40 blur-2xl" />

            <div className="relative rotate-1 rounded-[28px] border border-white/80 bg-white/55 p-3 shadow-[0_25px_60px_rgba(79,70,229,0.16)] backdrop-blur-xl transition-transform duration-500 hover:rotate-0">
              <div className="rounded-[22px] border border-white/90 bg-white/90 p-5 shadow-sm">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-slate-400">
                      Workspace
                    </p>
                    <h2 className="mt-1 text-lg font-black text-slate-800">
                      Inventory Hub
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-xl font-black text-white shadow-lg shadow-blue-500/20">
                    L
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-100/80 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg text-blue-600 shadow-sm">
                      ▦
                    </div>
                    <p className="mt-4 text-[10px] font-bold text-slate-500">
                      Inventory
                    </p>
                    <p className="mt-1 text-sm font-black text-slate-800">
                      Equipment
                    </p>
                  </div>

                  <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-purple-100/80 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg text-violet-600 shadow-sm">
                      ↗
                    </div>
                    <p className="mt-4 text-[10px] font-bold text-slate-500">
                      Operations
                    </p>
                    <p className="mt-1 text-sm font-black text-slate-800">
                      Issue Desk
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-extrabold text-slate-800">
                        Equipment activity
                      </p>
                      <p className="mt-1 text-[10px] text-slate-400">
                        Borrowing and return workflow
                      </p>
                    </div>
                    <span className="rounded-lg bg-emerald-100 px-2 py-1 text-[9px] font-extrabold text-emerald-700">
                      TRACKED
                    </span>
                  </div>

                  <div className="mt-4 flex items-end gap-2">
                    <div className="h-7 flex-1 rounded-t-lg bg-blue-200" />
                    <div className="h-11 flex-1 rounded-t-lg bg-blue-300" />
                    <div className="h-8 flex-1 rounded-t-lg bg-indigo-300" />
                    <div className="h-14 flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-indigo-500" />
                    <div className="h-10 flex-1 rounded-t-lg bg-violet-300" />
                    <div className="h-16 flex-1 rounded-t-lg bg-gradient-to-t from-violet-600 to-indigo-400" />
                    <div className="h-12 flex-1 rounded-t-lg bg-sky-300" />
                  </div>
                  <div className="mt-2 h-px bg-slate-200" />
                  <p className="mt-2 text-right text-[9px] font-medium text-slate-400">
                    Illustrative dashboard preview
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative badge */}
            <div className="absolute -left-5 top-1/3 flex items-center gap-2 rounded-2xl border border-white/90 bg-white/95 px-3 py-3 shadow-[0_8px_25px_rgba(71,85,105,0.12)] sm:-left-8">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-lg font-black text-emerald-700">
                ✓
              </div>
              <div>
                <p className="text-[10px] font-extrabold text-slate-800">
                  Easy tracking
                </p>
                <p className="mt-1 text-[9px] text-slate-400">
                  All in one place
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
      </section>

      {/* Feature cards */}
      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
              What LOANLY Offers
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Everything in Its Place.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-500">
            Simple tools to help your team keep equipment records clear,
            accessible, and organized.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className={`group relative overflow-hidden rounded-[24px] border border-white/90 bg-white/80 p-6 shadow-[0_7px_25px_rgba(71,85,105,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${feature.glow}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.color}`} />

              <div className="flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-black transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                <span className="text-sm font-black tracking-widest text-slate-200">
                  {feature.number}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {feature.description}
              </p>

              <div className={`mt-6 h-1 w-10 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-300 group-hover:w-20`} />
            </article>
          ))}
        </div>
      </section>

      {/* Bottom call to action */}
      <section className="relative isolate overflow-hidden rounded-[26px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-8 shadow-[0_12px_32px_rgba(79,70,229,0.20)] sm:px-9 sm:py-10">
        <div className="pointer-events-none absolute -right-10 -top-24 -z-10 h-64 w-64 rounded-full border-[35px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-100">
              Ready to Get Started?
            </p>
            <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              Your equipment workflow starts here.
            </h2>
            <p className="mt-3 text-sm leading-7 text-blue-100">
              Head to the Issue Desk to manage equipment lending and returns.
            </p>
          </div>

          <Link
            to="/issue-desk"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-xs font-extrabold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
          >
            Open Issue Desk
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}