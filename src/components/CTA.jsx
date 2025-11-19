import React from 'react'

function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_80%_30%,rgba(6,182,212,0.2),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden">
          <div className="relative p-10 md:p-16 bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_250px_at_20%_20%,rgba(59,130,246,0.25),transparent_60%)]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Build Something Great?</h3>
              <p className="mt-3 text-slate-300">Step into a network designed for progress, craft, and collaboration.</p>
              <div className="mt-8">
                <button className="rounded-xl bg-cyan-500 text-slate-900 font-semibold px-6 py-3 hover:shadow-[0_10px_40px_rgba(6,182,212,0.45)] transition">
                  Join Forum Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
