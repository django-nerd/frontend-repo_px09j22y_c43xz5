import React from 'react'

const points = [
  {
    title: 'A space to share ideas',
    desc: 'Publish concepts, frameworks, and prototypes in a safe, supportive environment.',
  },
  {
    title: 'A hub for collaboration',
    desc: 'Find co-creators, engineers, designers, and operators to bring ideas to life.',
  },
  {
    title: 'Concept testing & development',
    desc: 'Validate assumptions with peer feedback, rapid experiments, and mentorship.',
  },
  {
    title: 'Mentorship & contribution',
    desc: 'Guidance from leaders and alumni who contribute time, capital, or expertise.',
  },
]

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_10%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About FORUM</h2>
          <p className="mt-3 text-slate-300">FORUM is a modern environment where ambitious people gather to accelerate ideas into reality.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/7.5 transition shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/80 to-fuchsia-500/80 shadow-[0_0_25px_rgba(236,72,153,0.35)] mb-4" />
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
