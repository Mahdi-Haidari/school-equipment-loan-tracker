import { useState } from 'react'

export default function ManageEquipment({ equipment, onAdd, onEdit, onDelete }) {
  const [formData, setFormData] = useState({ title: '', category: 'computing', totalUnits: 1, condition: '' })
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')

  const hasActiveIssues = (item) => item.issuedUnits > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (editingId) {
      const currentItem = equipment.find(item => item.id === editingId)
      if (parseInt(formData.totalUnits) < currentItem.issuedUnits) {
        setError(`Total units cannot be less than currently issued units (${currentItem.issuedUnits}).`)
        return
      }
      onEdit({ ...formData, id: editingId, totalUnits: parseInt(formData.totalUnits), issuedUnits: currentItem.issuedUnits })
      setEditingId(null)
    } else {
      onAdd({ ...formData, totalUnits: parseInt(formData.totalUnits) })
    }
    setFormData({ title: '', category: 'computing', totalUnits: 1, condition: '' })
  }

  return (
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-6 pb-8 lg:grid-cols-12 animate-fade-in">

      <div className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/75 shadow-[0_12px_40px_rgba(79,70,229,0.06)] backdrop-blur-xl lg:col-span-5">
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 -z-10 h-40 w-40 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="border-b border-slate-100/80 bg-gradient-to-r from-sky-50/80 via-white/60 to-indigo-50/80 px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white shadow-[0_7px_18px_rgba(37,99,235,0.25)]">
              {editingId ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                </svg>
              )}
            </div>

            <div className="min-w-0">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-base font-black text-slate-900">
                  {editingId ? 'Edit Record' : 'Add Equipment'}
                </h3>
                <span className={`rounded-full border px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider ${
                  editingId
                    ? 'border-amber-100 bg-amber-50 text-amber-700'
                    : 'border-blue-100 bg-blue-50 text-blue-700'
                }`}>
                  {editingId ? 'Editing' : 'New Asset'}
                </span>
              </div>
              <p className="text-[11px] leading-5 text-slate-500">
                {editingId
                  ? 'Update the details of this inventory record.'
                  : 'Register a new item in your equipment inventory.'}
              </p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="relative space-y-5 p-5 sm:p-6">

          {error && (
            <div className="flex items-start gap-3 rounded-2xl border border-rose-200/80 bg-rose-50/90 p-4 shadow-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4m0 4h.01" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-extrabold text-rose-700">Unable to save changes</p>
                <p className="mt-1 text-[11px] leading-5 text-rose-600">{error}</p>
              </div>
            </div>
          )}

          <div>
            <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Equipment Title
            </label>
            <div className="group relative">
              <svg
                className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600"
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
              <input
                type="text"
                required
                placeholder="e.g. Laptop, Projector..."
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/85 py-3 pl-10 pr-4 text-xs font-bold text-slate-800 shadow-sm outline-none transition-all placeholder:font-medium placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/85 px-3 text-xs font-bold text-slate-600 shadow-sm outline-none transition-all hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="computing">Computing</option>
                <option value="presentation">Presentation</option>
                <option value="classroom supplies">Classroom Supplies</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Total Units
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M8 9h8M8 13h8M8 17h4" />
                </svg>
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.totalUnits}
                  onChange={(e) => setFormData(prev => ({ ...prev, totalUnits: e.target.value }))}
                  className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/85 py-3 pl-10 pr-3 text-xs font-bold text-slate-800 shadow-sm outline-none transition-all hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Equipment Condition
            </label>
            <textarea
              rows="3"
              required
              placeholder="Describe the current condition of this equipment..."
              value={formData.condition}
              onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
              className="w-full resize-none rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-xs font-semibold leading-6 text-slate-800 shadow-sm outline-none transition-all placeholder:font-medium placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="border-t border-slate-100 pt-4">
            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-3.5 text-xs font-extrabold text-white shadow-[0_7px_20px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(79,70,229,0.35)] active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <svg
                className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {editingId ? (
                  <path d="m5 12 4 4L19 6" />
                ) : (
                  <path d="M12 5v14M5 12h14" />
                )}
              </svg>
              <span className="relative">
                {editingId ? 'Save Changes' : 'Add Equipment'}
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Equipment Registry */}
      <div className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/75 shadow-[0_12px_40px_rgba(79,70,229,0.06)] backdrop-blur-xl lg:col-span-7">
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-indigo-200/25 blur-3xl" />

        {/* Registry Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100/80 bg-gradient-to-r from-sky-50/80 via-white/60 to-indigo-50/80 px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 text-white shadow-[0_7px_18px_rgba(37,99,235,0.22)]">
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
              <h3 className="text-base font-black text-slate-900">Equipment Registry</h3>
              <p className="mt-1 text-[10px] font-medium text-slate-400">
                Manage your registered inventory
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3 py-1.5 text-[10px] font-extrabold text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {equipment.length} {equipment.length === 1 ? 'Record' : 'Records'}
          </span>
        </div>

        {/* Registry List */}
        <div className="p-3 sm:p-4">
          {equipment.length > 0 ? (
            <div className="space-y-2">
              {equipment.map(item => {
                const blocked = hasActiveIssues(item)

                return (
                  <div
                    key={item.id}
                    className={`group flex flex-col gap-4 rounded-2xl border p-4 transition-all duration-200 sm:flex-row sm:items-center sm:justify-between ${
                      editingId === item.id
                        ? 'border-blue-200 bg-blue-50/60 shadow-sm'
                        : 'border-slate-100 bg-white/65 hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        editingId === item.id
                          ? 'border-blue-200 bg-blue-100 text-blue-700'
                          : 'border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/70 text-blue-600 group-hover:border-blue-100'
                      }`}>
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
                          <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
                        </svg>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="break-words text-sm font-extrabold text-slate-800 transition-colors group-hover:text-blue-700">
                            {item.title}
                          </h4>
                          {editingId === item.id && (
                            <span className="rounded-md border border-blue-100 bg-blue-100/70 px-2 py-0.5 text-[9px] font-extrabold text-blue-700">
                              Editing
                            </span>
                          )}
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-lg border border-blue-100/80 bg-blue-50/80 px-2 py-1 text-[9px] font-extrabold capitalize text-blue-700">
                            {item.category}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-400">
                            Total: <span className="font-extrabold text-slate-600">{item.totalUnits}</span>
                          </span>
                          <span className="h-1 w-1 rounded-full bg-slate-300" />
                          <span className="text-[10px] font-semibold text-slate-400">
                            Issued:{' '}
                            <span className={`font-extrabold ${
                              blocked ? 'text-orange-600' : 'text-slate-600'
                            }`}>
                              {item.issuedUnits}
                            </span>
                          </span>
                        </div>

                        <div className="mt-2 flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            blocked ? 'bg-orange-400' : 'bg-emerald-400'
                          }`} />
                          <span className="text-[10px] font-semibold text-slate-400">
                            {blocked ? 'Equipment currently issued' : 'No active issues'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 border-t border-slate-100 pt-3 sm:border-0 sm:pt-0">
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(item.id)
                          setFormData({
                            title: item.title,
                            category: item.category,
                            totalUnits: item.totalUnits,
                            condition: item.condition
                          })
                        }}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-blue-100 bg-blue-50/80 px-3 py-2.5 text-[10px] font-extrabold text-blue-700 transition-all hover:border-blue-200 hover:bg-blue-100/80 active:scale-95 sm:flex-none"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
                        </svg>
                        Edit
                      </button>

                      <button
                        type="button"
                        disabled={blocked}
                        onClick={() => {
                          if (!blocked) onDelete(item.id)
                        }}
                        title={blocked ? 'Cannot delete equipment while units are issued' : 'Delete equipment'}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-rose-100 bg-rose-50/80 px-3 py-2.5 text-[10px] font-extrabold text-rose-600 transition-all hover:border-rose-200 hover:bg-rose-100/80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-rose-50/80 sm:flex-none"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-gradient-to-b from-white/60 to-blue-50/30 px-5 py-14 text-center">
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
                  <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                  <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
                </svg>
              </div>
              <h4 className="text-sm font-black text-slate-800">No Equipment Registered</h4>
              <p className="mt-2 max-w-xs text-xs leading-6 text-slate-400">
                Your inventory is empty. Use the form to register your first equipment item.
              </p>
            </div>
          )}
        </div>

        {/* Registry Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100/80 bg-slate-50/40 px-5 py-3.5 sm:px-6">
          <span className="text-[10px] font-semibold text-slate-400">
            Inventory management
          </span>
          <span className="text-[10px] font-bold text-slate-500">
            {equipment.length} total {equipment.length === 1 ? 'asset' : 'assets'}
          </span>
        </div>
      </div>
    </div>
  )
}
