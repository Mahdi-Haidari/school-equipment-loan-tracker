
import { useState } from 'react'

export default function Equipment({ equipment }) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [sortBy, setSortBy] = useState('none')

  const getAvailableUnits = (item) => item.totalUnits - item.issuedUnits

  const filteredEquipment = equipment
    .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter(item => selectedCategory === 'all' ? true : item.category === selectedCategory)
    .filter(item => onlyAvailable ? getAvailableUnits(item) > 0 : true)
    .sort((a, b) => {
      if (sortBy === 'asc') return getAvailableUnits(a) - getAvailableUnits(b)
      if (sortBy === 'desc') return getAvailableUnits(b) - getAvailableUnits(a)
      return 0
    })

  return (
    <div className="mx-auto max-w-[1600px] space-y-6 px-3 pb-8 sm:px-5 animate-fade-in">

      <div className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-sky-50 via-white to-indigo-50/90 p-5 shadow-[0_10px_35px_rgba(79,70,229,0.07)] backdrop-blur-md sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-40 w-48 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500 ring-4 ring-blue-100/70" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700">
                Inventory Overview
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Equipment <span className="text-blue-600">Inventory</span>
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
              Browse assets, check stock availability, and manage your inventory at a glance.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/90 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                <path d="m4 7.5 8 4.5 8-4.5M12 12v9M8 5.3l8 4.5" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400">
                Total Assets
              </p>
              <p className="mt-1 text-2xl font-black leading-none text-slate-800">
                {equipment.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-hidden rounded-[26px] border border-white/80 bg-white/70 p-4 shadow-[0_8px_30px_rgba(71,85,105,0.05)] backdrop-blur-xl sm:p-5">
        <div className="pointer-events-none absolute -right-10 -top-16 -z-10 h-36 w-36 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="mb-4 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100/80">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M7 12h10m-7 5h4" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-800">Search & Filters</h3>
            <p className="mt-0.5 text-[10px] font-medium text-slate-400">
              Refine your inventory results
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <div className="group relative min-w-0 flex-1">
            <svg
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>


            <input
              type="text"
              placeholder="Search equipment by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/85 py-3 pl-11 pr-4 text-xs font-bold text-slate-800 shadow-sm outline-none transition-all placeholder:font-medium placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>



          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:flex xl:shrink-0">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-12 min-w-0 rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-xs font-bold text-slate-600 shadow-sm outline-none transition-all hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 xl:w-48"
            >
              <option value="all">All Categories</option>
              <option value="computing">Computing</option>
              <option value="presentation">Presentation</option>
              <option value="classroom supplies">Classroom Supplies</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-12 min-w-0 rounded-2xl border border-slate-200/80 bg-white/85 px-4 text-xs font-bold text-slate-600 shadow-sm outline-none transition-all hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 xl:w-48"
            >
              <option value="none">Sort by Availability</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          <label className={`flex h-12 shrink-0 cursor-pointer select-none items-center gap-3 rounded-2xl border px-4 transition-all duration-200 ${
            onlyAvailable
              ? 'border-blue-200 bg-blue-50/90 shadow-sm'
              : 'border-slate-200/80 bg-white/85 hover:border-blue-200 hover:bg-blue-50/40'
          }`}>
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-2 focus:ring-blue-500/30"
            />
            <span className={`whitespace-nowrap text-xs font-extrabold ${
              onlyAvailable ? "text-blue-700" : "text-slate-600"
            }`}>
              Available Only
            </span>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
          <p className="text-[10px] font-semibold text-slate-400">
            Showing <span className="font-black text-slate-700">{filteredEquipment.length}</span> of{' '}
            <span className="font-black text-slate-700">{equipment.length}</span> equipment items
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch('')
              setSelectedCategory('all')
              setOnlyAvailable(false)
              setSortBy('none')
            }}
            className="rounded-lg px-2.5 py-1.5 text-[10px] font-extrabold text-blue-600 transition-colors hover:bg-blue-50 hover:text-indigo-700"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[26px] border border-white/80 bg-white/75 shadow-[0_12px_40px_rgba(79,70,229,0.06)] backdrop-blur-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100/80 bg-gradient-to-r from-white/80 via-blue-50/40 to-indigo-50/50 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M4 9h16M9 9v11" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-800">Equipment Directory</h3>
              <p className="mt-1 text-[10px] font-medium text-slate-400">
                Inventory details and stock status
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1.5 text-[10px] font-extrabold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live Inventory
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left text-xs text-slate-600">
            <thead>
              <tr className="border-b border-slate-200/70 bg-slate-50/70 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                <th className="px-6 py-4">Asset Title</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4 text-center">Total Stock</th>
                <th className="px-4 py-4 text-center">Issued</th>
                <th className="px-4 py-4 text-center">Available</th>
                <th className="px-6 py-4">Condition</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100/80 font-bold text-slate-700">
              {filteredEquipment.map(item => {
                const avail = getAvailableUnits(item)

                return (
                  <tr
                    key={item.id}
                    className="group transition-colors duration-200 hover:bg-blue-50/40"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100/80 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 transition-all duration-200 group-hover:border-blue-200 group-hover:shadow-sm">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                            <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
                          </svg>
                        </div>
                        <span className="text-xs font-extrabold text-slate-800 transition-colors group-hover:text-blue-700 sm:text-sm">
                          {item.title}
                        </span>
                      </div>
                    </td>

                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-lg border border-blue-100/80 bg-blue-50/80 px-2.5 py-1 text-[10px] font-extrabold capitalize text-blue-700">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center">
                      <span className="font-bold tabular-nums text-slate-500">
                        {item.totalUnits}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center">
                      <span className={`inline-flex min-w-9 items-center justify-center rounded-lg border px-2.5 py-1 text-[10px] font-extrabold tabular-nums ${
                        item.issuedUnits > 0
                          ? 'border-orange-200/70 bg-orange-50 text-orange-600'
                          : 'border-slate-200 bg-slate-100/80 text-slate-400'
                      }`}>
                        {item.issuedUnits}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-center">
                      <span className={`inline-flex min-w-10 items-center justify-center rounded-xl border px-3 py-1.5 text-sm font-black tabular-nums ${
                        avail > 0
                          ? 'border-emerald-100 bg-emerald-50/80 text-emerald-700'
                          : 'border-rose-100 bg-rose-50/80 text-rose-600'
                      }`}>
                        {avail}
                      </span>
                    </td>

                    <td className="max-w-xs px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 shrink-0 rounded-full ${
                          item.condition
                            ? 'bg-slate-300'
                            : 'bg-slate-200'
                        }`} />
                        <span className="truncate text-xs font-medium text-slate-500" title={item.condition}>
                          {item.condition}
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredEquipment.length === 0 && (
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white/40 to-blue-50/30 px-5 py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-[22px] border border-blue-100 bg-white shadow-sm">
              <svg
                className="h-7 w-7 text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4M8 11h6" />
              </svg>
            </div>
            <h3 className="text-sm font-black text-slate-800">No Equipment Found</h3>
            <p className="mt-2 max-w-sm text-xs leading-6 text-slate-400">
              No equipment matches your current search or filter settings. Try adjusting your filters.
            </p>
          </div>
        )}

        {filteredEquipment.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100/80 bg-slate-50/40 px-5 py-3.5 sm:px-6">
            <span className="text-[10px] font-semibold text-slate-400">
              Inventory records
            </span>
            <span className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-[10px] font-extrabold text-slate-600 shadow-sm">
              {filteredEquipment.length} {filteredEquipment.length === 1 ? 'item' : 'items'}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
