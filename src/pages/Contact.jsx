import { useState } from 'react'

const CONTACT_EMAIL = 'mahdihaidari864@gmail.com'
const PHONE_NUMBER = '+93780317194'
const GITHUB_URL = 'https://github.com/mahdi-haidari'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject.'
    if (!form.message.trim()) newErrors.message = 'Please write your message.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const inputClass = (field) =>
    `w-full rounded-xl border ${
      errors[field] ? 'border-red-300 bg-red-50/50' : 'border-slate-200 bg-white/80'
    } px-4 py-3 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/70`

  return (
    <main className="relative isolate mx-auto max-w-[1500px] space-y-8 pb-6">

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-10 top-0 -z-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />

      {/* Page heading */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/80 bg-gradient-to-br from-sky-100 via-indigo-50 to-violet-100 px-6 py-9 shadow-[0_12px_40px_rgba(79,70,229,0.09)] sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/20" />

        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Contact & Support
          </span>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Let's Start a
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Conversation.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Have a question, an idea, or feedback about LOANLY?
            Send a message and get in touch with the developer.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.35fr_0.85fr]">

        {/* Contact form */}
        <div className="relative overflow-hidden rounded-[26px] border border-white/90 bg-white/85 p-6 shadow-[0_8px_35px_rgba(71,85,105,0.07)] backdrop-blur-xl sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

          <div className="mb-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-violet-100 text-blue-700">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>

            <h2 className="mt-4 text-xl font-black text-slate-900">
              Send a Message
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Fill in the details below. Your email application will open with
              the message prepared for sending.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-bold text-slate-700">
                  Full Name <span className="text-blue-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                  aria-invalid={Boolean(errors.name)}
                  required
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold text-slate-700">
                  Email Address <span className="text-blue-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                  aria-invalid={Boolean(errors.email)}
                  required
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-xs font-bold text-slate-700">
                Subject <span className="text-blue-600">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is your message about?"
                value={form.subject}
                onChange={handleChange}
                className={inputClass('subject')}
                aria-invalid={Boolean(errors.subject)}
                required
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-bold text-slate-700">
                Your Message <span className="text-blue-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass('message')} resize-y`}
                aria-invalid={Boolean(errors.message)}
                required
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-4 text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(79,70,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(79,70,229,0.32)] active:scale-[0.99]"
            >
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              Prepare Email
            </button>

            <p className="text-center text-[11px] leading-5 text-slate-400">
              Your default email application must be configured to send the message.
            </p>
          </form>
        </div>

        {/* Contact information */}
        <aside className="space-y-5">

          <div className="rounded-[26px] border border-white/90 bg-white/80 p-6 shadow-[0_8px_30px_rgba(71,85,105,0.06)] backdrop-blur-xl sm:p-7">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
              Get in Touch
            </p>
            <h2 className="mt-2 text-xl font-black text-slate-900">
              Contact Information
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Choose your preferred way to connect.
            </p>

            <div className="mt-6 space-y-3">

              {/* Email */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition-transform group-hover:scale-105">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Email
                  </p>
                  <p className="mt-1 break-all text-sm font-bold text-slate-800 group-hover:text-blue-700">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="group flex items-center gap-4 rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm transition-transform group-hover:scale-105">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 3.1Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800 group-hover:text-emerald-700">
                    {PHONE_NUMBER}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-purple-50/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm transition-transform group-hover:scale-105">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.44.11-2.99 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.61 0c2.14-1.45 3.08-1.16 3.08-1.16.61 1.55.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.64 5.28-5.15 5.56.41.36.77 1.03.77 2.08v3.1c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    GitHub
                  </p>
                  <p className="mt-1 break-all text-sm font-bold text-slate-800 group-hover:text-violet-700">
                    View My Profile ↗
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-[26px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 shadow-[0_12px_30px_rgba(79,70,229,0.20)] sm:p-7">
            <div className="pointer-events-none absolute -right-10 -top-16 -z-10 h-48 w-48 rounded-full border-[28px] border-white/10" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                  <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M16 14v.01M16 17v.01" />
                </svg>
              </div>

              <h3 className="mt-5 text-lg font-black text-white">
                Support Desk
              </h3>
              <p className="mt-2 text-sm leading-6 text-blue-100">
                For questions about equipment tracking, inventory workflows,
                or technical support, send us an email.
              </p>

              <div className="mt-5 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-100">
                  Office
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  Building C, Room 402
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}