import React from 'react'

const stats = [
  { value: '10,000+', label: 'Young Innovators' },
  { value: '500+', label: 'Projects to Support' },
  { value: '∞', label: 'Collaboration Without Boundaries' },
  { value: '1', label: 'Space for Growth & Creativity' },
]

function Impact() {
  return (
    <section id="impact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_80%_50%,rgba(14,165,233,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{s.value}</div>
                <div className="mt-2 text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
