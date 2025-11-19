import React from 'react'

const people = [
  { name: 'Aria', role: 'Product Designer', quote: 'FORUM gave my early concepts momentum and incredible collaborators.' },
  { name: 'Kian', role: 'Student Founder', quote: 'I met my co-founder here and shipped our MVP in three weeks.' },
  { name: 'Noor', role: 'Engineer', quote: 'A generous community with real craft and energy.' },
]

function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_60%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Voices from the community</h2>
          <p className="mt-3 text-slate-300">Minimal, honest reflections from people building with us.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-slate-200">“{p.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{p.name} • {p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
