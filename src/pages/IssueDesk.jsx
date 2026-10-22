import { useState } from "react";

export default function IssueDesk({
  equipment,
  issues,
  onConfirmIssue,
  onReturnUnits,
}) {
  const [cart, setCart] = useState([]);
  const [borrowerAlias, setBorrowerAlias] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [returnAmounts, setReturnAmounts] = useState({});

  const getAvailableUnits = (item) => item.totalUnits - item.issuedUnits;

  const addToCart = (item) => {
    const available = getAvailableUnits(item);
    if (available <= 0) return;
    setCart((prev) =>
      prev.some((c) => c.id === item.id)
        ? prev
        : [...prev, { ...item, quantity: 1 }],
    );
  };

  const updateCartQty = (id, change) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextQty = item.quantity + change;
          const available = getAvailableUnits(
            equipment.find((e) => e.id === id),
          );
          if (nextQty <= 0 || nextQty > available) return item;
          return { ...item, quantity: nextQty };
        }
        return item;
      }),
    );
  };

  const submitIssue = (e) => {
    e.preventDefault();
    if (!borrowerAlias || !dueDate || cart.length === 0) return;
    const newIssues = cart.map((item) => ({
      id: `iss-${Date.now()}-${item.id}`,
      equipmentId: item.id,
      borrowerAlias,
      quantity: item.quantity,
      dueDate,
      status: "active",
    }));
    onConfirmIssue(newIssues);
    setCart([]);
    setBorrowerAlias("");
    setDueDate("");
  };

  return (
    <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-6 pb-8 lg:grid-cols-12 animate-fade-in">
      {/* Left Column */}
      <div className="space-y-6 lg:col-span-7">
        {/* Equipment Selection */}
        <section className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/75 shadow-[0_12px_40px_rgba(79,70,229,0.06)] backdrop-blur-xl">
          <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl" />

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
                  <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                  <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
                </svg>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-black text-slate-900">
                    Select Equipment
                  </h3>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-blue-700">
                    Step 01
                  </span>
                </div>
                <p className="mt-1 text-[10px] font-medium text-slate-400">
                  Choose the equipment to issue
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[10px] font-extrabold text-slate-600 shadow-sm">
              {equipment.length} {equipment.length === 1 ? "Asset" : "Assets"}
            </span>
          </div>

          <div className="p-3 sm:p-4">
            {equipment.length > 0 ? (
              <div className="space-y-2">
                {equipment.map((item) => {
                  const avail = getAvailableUnits(item);
                  const inCart = cart.some((c) => c.id === item.id);

                  return (
                    <div
                      key={item.id}
                      className={`group flex flex-col gap-3 rounded-2xl border p-4 transition-all duration-200 sm:flex-row sm:items-center sm:justify-between ${
                        inCart
                          ? "border-blue-200 bg-blue-50/60 shadow-sm"
                          : "border-slate-100 bg-white/65 hover:border-blue-100 hover:bg-blue-50/30 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                            inCart
                              ? "border-blue-200 bg-blue-100 text-blue-700"
                              : "border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/70 text-blue-600 group-hover:border-blue-100"
                          }`}
                        >
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

                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-extrabold text-slate-800 transition-colors group-hover:text-blue-700">
                            {item.title}
                          </h4>
                          <div className="mt-1.5 flex flex-wrap items-center gap-2">
                            <span className="rounded-lg border border-blue-100/80 bg-blue-50/80 px-2 py-1 text-[9px] font-extrabold capitalize text-blue-700">
                              {item.category}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1.5 text-[10px] font-bold ${
                                avail > 0 ? "text-emerald-600" : "text-rose-500"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  avail > 0 ? "bg-emerald-400" : "bg-rose-400"
                                }`}
                              />
                              {avail} available
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={avail <= 0}
                        onClick={() => addToCart(item)}
                        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-[10px] font-extrabold transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:min-w-[100px] ${
                          inCart
                            ? "border-blue-200 bg-blue-100/80 text-blue-700 hover:bg-blue-100"
                            : "border-blue-100 bg-blue-50/80 text-blue-700 hover:border-blue-200 hover:bg-blue-100/80"
                        }`}
                      >
                        {inCart ? (
                          <>
                            <svg
                              className="h-3.5 w-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m5 12 4 4L19 6" />
                            </svg>
                            Added
                          </>
                        ) : (
                          <>
                            <svg
                              className="h-3.5 w-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                            Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-gradient-to-b from-white/60 to-blue-50/30 px-5 py-12 text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-400 shadow-sm">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5z" />
                    <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
                  </svg>
                </div>
                <h4 className="text-sm font-black text-slate-800">
                  No Equipment Available
                </h4>
                <p className="mt-1 text-xs leading-6 text-slate-400">
                  Add equipment to your inventory before creating a loan.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Active Issues Ledger */}
        <section className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/75 shadow-[0_12px_40px_rgba(79,70,229,0.06)] backdrop-blur-xl">
          <div className="pointer-events-none absolute -left-16 -top-16 -z-10 h-40 w-40 rounded-full bg-orange-200/20 blur-3xl" />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100/80 bg-gradient-to-r from-orange-50/70 via-white/60 to-amber-50/60 px-5 py-5 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-100 text-orange-600">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
                  <path d="M16 3h5v5M10 14 21 3M7 8h5M7 12h3" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-900">
                  Active Issues Ledger
                </h3>
                <p className="mt-1 text-[10px] font-medium text-slate-400">
                  Track borrowed equipment and returns
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3 py-1.5 text-[10px] font-extrabold text-orange-700">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              {issues.filter((i) => i.status === "active").length} Active
            </span>
          </div>

          <div className="p-3 sm:p-4">
            {issues.filter((i) => i.status === "active").length > 0 ? (
              <div className="space-y-3">
                {issues
                  .filter((i) => i.status === "active")
                  .map((issue) => {
                    const eq = equipment.find(
                      (e) => e.id === issue.equipmentId,
                    );

                    return (
                      <div
                        key={issue.id}
                        className="rounded-2xl border border-slate-100 bg-white/70 p-4 transition-all duration-200 hover:border-orange-100 hover:shadow-sm"
                      >
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="break-words text-sm font-extrabold text-slate-800">
                                {eq?.title}
                              </h4>
                              <span className="rounded-lg border border-orange-200/70 bg-orange-50 px-2 py-1 text-[9px] font-extrabold text-orange-700">
                                Qty: {issue.quantity}
                              </span>
                            </div>

                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
                                <svg
                                  className="h-3.5 w-3.5 text-slate-400"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <circle cx="12" cy="8" r="4" />
                                  <path d="M5 21a7 7 0 0 1 14 0" />
                                </svg>
                                {issue.borrowerAlias}
                              </span>
                              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
                                <svg
                                  className="h-3.5 w-3.5 text-slate-400"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect
                                    x="3"
                                    y="5"
                                    width="18"
                                    height="16"
                                    rx="2"
                                  />
                                  <path d="M16 3v4M8 3v4M3 11h18" />
                                </svg>
                                Due: {issue.dueDate}
                              </span>
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-2 border-t border-slate-100 pt-3 sm:border-0 sm:pt-0">
                            <input
                              type="number"
                              min="1"
                              max={issue.quantity}
                              placeholder="Qty"
                              aria-label={`Return quantity for ${eq?.title}`}
                              value={returnAmounts[issue.id] || ""}
                              onChange={(e) =>
                                setReturnAmounts((prev) => ({
                                  ...prev,
                                  [issue.id]: e.target.value,
                                }))
                              }
                              className="h-10 w-20 rounded-xl border border-slate-200 bg-white px-2 text-center text-xs font-bold text-slate-700 shadow-sm outline-none transition-all placeholder:font-medium placeholder:text-slate-400 hover:border-emerald-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10"
                            />

                            <button
                              type="button"
                              onClick={() => {
                                const q = parseInt(
                                  returnAmounts[issue.id] || 0,
                                );
                                if (q > 0 && q <= issue.quantity) {
                                  onReturnUnits(issue.id, issue.equipmentId, q);
                                  setReturnAmounts((p) => ({
                                    ...p,
                                    [issue.id]: "",
                                  }));
                                }
                              }}
                              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-emerald-200/80 bg-emerald-50/90 px-3 text-[10px] font-extrabold text-emerald-700 transition-all hover:border-emerald-300 hover:bg-emerald-100 active:scale-95"
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
                                <path d="M3 12a9 9 0 0 1 15.4-6.4L21 8" />
                                <path d="M21 3v5h-5M21 12a9 9 0 0 1-15.4 6.4L3 16" />
                                <path d="M3 21v-5h5" />
                              </svg>
                              Return
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-gradient-to-b from-white/60 to-orange-50/20 px-5 py-10 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>
                <h4 className="text-sm font-black text-slate-800">
                  No Active Issues
                </h4>
                <p className="mt-1 text-xs leading-6 text-slate-400">
                  All equipment is accounted for. Active loans will appear here.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Right Column: Issue Form */}
      <section className="relative isolate overflow-hidden rounded-[28px] border border-white/80 bg-white/75 shadow-[0_12px_40px_rgba(79,70,229,0.08)] backdrop-blur-xl lg:sticky lg:top-28 lg:col-span-5">
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 -z-10 h-40 w-40 rounded-full bg-cyan-200/25 blur-3xl" />

        <div className="border-b border-slate-100/80 bg-gradient-to-r from-sky-50/80 via-white/60 to-violet-50/80 px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-600 text-white shadow-[0_7px_20px_rgba(79,70,229,0.25)]">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
                <path d="M16 3h5v5M10 14 21 3M7 8h5M7 12h3" />
              </svg>
            </div>
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-black text-slate-900">
                  Issue Desk Slip
                </h3>
                <span className="rounded-full border border-violet-100 bg-violet-50 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-violet-700">
                  Step 02
                </span>
              </div>
              <p className="text-[10px] font-medium leading-5 text-slate-400">
                Review your selection and confirm the loan
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={submitIssue} className="relative space-y-5 p-5 sm:p-6">
          {/* Cart */}
          <div>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Selected Equipment
              </h4>
              <span className="rounded-lg border border-blue-100 bg-blue-50 px-2 py-1 text-[9px] font-extrabold text-blue-700">
                {cart.length} {cart.length === 1 ? "Item" : "Items"}
              </span>
            </div>

            {cart.length > 0 ? (
              <div className="space-y-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-blue-100/80 bg-gradient-to-r from-blue-50/70 to-indigo-50/50 p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-sm">
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
                        <span
                          className="truncate text-xs font-extrabold text-slate-800"
                          title={item.title}
                        >
                          {item.title}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setCart((prev) =>
                            prev.filter((c) => c.id !== item.id),
                          )
                        }
                        aria-label={`Remove ${item.title} from cart`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3 border-t border-blue-100/70 pt-3">
                      <span className="text-[10px] font-semibold text-slate-400">
                        Quantity
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.title} quantity`}
                          onClick={() => updateCartQty(item.id, -1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-black text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 active:scale-95"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-black tabular-nums text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase ${item.title} quantity`}
                          onClick={() => updateCartQty(item.id, 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-black text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 active:scale-95"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 px-4 py-8 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-300 shadow-sm">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 6h15l-1.5 9h-12z" />
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                    <path d="M6 6 5 3H2" />
                  </svg>
                </div>
                <p className="text-xs font-extrabold text-slate-600">
                  Your cart is empty
                </p>
                <p className="mt-1 text-[10px] leading-5 text-slate-400">
                  Add equipment from the selection panel to get started.
                </p>
              </div>
            )}
          </div>

          {/* Borrower Details */}
          <div className="space-y-4 border-t border-slate-100 pt-5">
            <div>
              <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Borrower Alias
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
                  <circle cx="12" cy="8" r="4" />
                  <path d="M5 21a7 7 0 0 1 14 0" />
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Enter borrower name or ID"
                  value={borrowerAlias}
                  onChange={(e) => setBorrowerAlias(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/85 py-3 pl-10 pr-4 text-xs font-bold text-slate-800 shadow-sm outline-none transition-all placeholder:font-medium placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Due Date
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
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 11h18" />
                </svg>
                <input
                  type="date"
                  required
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200/80 bg-white/85 py-3 pl-10 pr-4 text-xs font-bold text-slate-700 shadow-sm outline-none transition-all hover:border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="border-t border-slate-100 pt-4">
            <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-3">
              <span className="text-[10px] font-bold text-slate-500">
                Total Units to Issue
              </span>
              <span className="text-lg font-black tabular-nums text-slate-800">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            <button
              type="submit"
              disabled={cart.length === 0}
              className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-3.5 text-xs font-extrabold text-white shadow-[0_7px_20px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(79,70,229,0.35)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-[0_7px_20px_rgba(79,70,229,0.25)]"
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="relative">Confirm Loan Issue</span>
            </button>

            <p className="mt-3 text-center text-[9px] leading-5 text-slate-400">
              Review the borrower details and selected quantities before
              confirming.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
