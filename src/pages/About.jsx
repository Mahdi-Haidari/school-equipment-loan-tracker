export default function About() {
  const features = [
    {
      icon: '▦',
      title: 'Asset Tracking',
      description:
        'Keep computer, presentation, and classroom equipment organized in one place.',
      color: 'from-blue-500 to-indigo-600',
      bg: 'bg-blue-50',
    },
    {
      icon: '↗',
      title: 'Easy Borrowing',
      description:
        'Make equipment lending and return records easier to manage and review.',
      color: 'from-violet-500 to-purple-600',
      bg: 'bg-violet-50',
    },
    {
      icon: '✓',
      title: 'Better Organization',
      description:
        'Maintain clearer inventory records and reduce everyday administrative work.',
      color: 'from-emerald-500 to-teal-600',
      bg: 'bg-emerald-50',
    },
  ]

  return (
    <main className="relative isolate space-y-8 overflow-hidden rounded-[28px]">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-16 top-0 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-0 -z-10 h-64 w-64 rounded-full bg-violet-200/40 blur-3xl" />

      {/* Hero section */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-sky-100 via-indigo-50 to-violet-100 p-7 shadow-[0_12px_40px_rgba(79,70,229,0.09)] sm:p-10 lg:p-12">

        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border-[35px] border-white/20" />
        <div className="pointer-events-none absolute right-16 top-16 h-24 w-24 rounded-full bg-blue-300/20 blur-2xl" />

        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Discover LOANLY
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Smarter Inventory.
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Simpler Management.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            LOANLY is an equipment tracking solution designed to help school
            lab supervisors organize assets, manage borrowing, and keep
            equipment records in one convenient place.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-xs font-bold text-slate-700 shadow-sm">
              <span className="text-lg text-blue-600">▦</span>
              Centralized Inventory
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/70 px-4 py-3 text-xs font-bold text-slate-700 shadow-sm">
              <span className="text-lg text-violet-600">↻</span>
              Borrow & Return
            </div>
          </div>
        </div>

        {/* Decorative brand tile */}
        <div className="pointer-events-none absolute bottom-8 right-8 hidden rotate-6 sm:block lg:bottom-12 lg:right-14">
          <div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/70 bg-white/50 text-5xl font-black text-blue-600 shadow-xl shadow-indigo-500/10 backdrop-blur-xl lg:h-36 lg:w-36 lg:text-6xl">
            L<span className="text-violet-500">.</span>
          </div>
        </div>
      </section>

      {/* Features heading */}
      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
              What We Do
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
              Built for Better Organization
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Practical tools for everyday equipment management in educational environments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-[24px] border border-white/90 bg-white/80 p-6 shadow-[0_6px_25px_rgba(71,85,105,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(79,70,229,0.12)]"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${feature.color} opacity-80`} />

              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} text-2xl font-black text-blue-700 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {feature.icon}
              </div>

              <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                FEATURE 0{index + 1}
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {feature.description}
              </p>

              <div className={`mt-5 h-1 w-10 rounded-full bg-gradient-to-r ${feature.color} transition-all duration-300 group-hover:w-20`} />
            </article>
          ))}
        </div>
      </section>

      {/* Mission banner */}
      <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-7 shadow-[0_12px_30px_rgba(79,70,229,0.2)] sm:p-9">
        <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border-[30px] border-white/10" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-100">
              Our Mission
            </p>
            <h2 className="mt-3 text-xl font-black text-white sm:text-2xl">
              Less paperwork. More control.
            </h2>
            <p className="mt-3 text-sm leading-7 text-blue-100">
              We aim to make equipment records easier to maintain, so school
              teams can spend less time on logistics and more time on learning.
            </p>
          </div>

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-3xl text-white backdrop-blur-md">
            ✦
          </div>
        </div>
      </section>
    </main>
  )
}