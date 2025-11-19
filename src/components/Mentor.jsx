import React from 'react'

function Mentor() {
  return (
    <section id="mentor" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_20%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white">Empower the Next Generation.</h3>
            <p className="mt-3 text-slate-300">Mentors help shape ideas, accelerate progress, and open doors. Share your expertise and support builders who are pushing new frontiers.</p>
          </div>
          <div className="w-full max-w-md">
            <div className="grid grid-cols-1 gap-3">
              <input placeholder="Full name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
              <input placeholder="Email" type="email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
              <button className="rounded-xl bg-cyan-500 text-slate-900 font-semibold px-5 py-3 hover:shadow-[0_10px_40px_rgba(6,182,212,0.45)] transition">
                Apply to Become a Mentor
              </button>
              <p className="text-xs text-slate-400">This is a preview. Submitting is disabled in this demo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mentor
