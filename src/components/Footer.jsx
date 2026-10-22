export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-blue-100/80 bg-gradient-to-br from-sky-50 via-indigo-50 to-violet-100/80">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-violet-200/40 blur-3xl" />

      {/* Gradient accent */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

      <div className="relative mx-auto max-w-[1600px] px-5 py-9 sm:px-8 lg:px-10">

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 text-lg font-black text-white shadow-lg shadow-blue-600/20">
              L
            </div>

            <div>
              <p className="text-base font-black tracking-[0.13em] text-slate-900">
                LOAN<span className="text-blue-600">LY</span>
              </p>
              <p className="mt-1 text-[10px] font-semibold tracking-wide text-slate-500">
                Smart Inventory Management
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="max-w-md">
            <p className="text-sm font-bold text-slate-700">
              © 2026 LOANLY
            </p>
            <p className="mt-1.5 text-xs leading-6 text-slate-500">
              Equipment tracking made simple. All school records are
              protected and managed with care.
            </p>
          </div>

          {/* Developer */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/60 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 17-5-5 5-5M16 7l5 5-5 5M14 4l-4 16" />
              </svg>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Designed & Developed by
              </p>

              <a
                href="https://portfolio-pink-seven-5h7e8qcdpn.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-slate-800 transition-colors hover:text-blue-600"
              >
                Mahdi Haidari
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="my-7 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] font-semibold tracking-wide text-slate-400">
            BUILT WITH CARE · POWERED BY LOANLY
          </p>

          <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]" />
            Inventory management made smarter
          </div>
        </div>
      </div>
    </footer>
  )
}