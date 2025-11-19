import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero({ onPrimaryClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_-10%_20%,rgba(139,92,246,0.22),transparent_60%)]" />

      {/* 3D Spline object as subtle background */}
      <div className="absolute inset-0 -z-10 opacity-70">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Scrim for readability over 3D */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/60" />

      {/* Content centered */}
      <div className="relative z-10 max-w-4xl mx-auto w-full px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            Live for creators, founders & young builders
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Where Ideas Meet Opportunity.
          </h1>
          <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-2xl">
            A collaborative ecosystem for innovators, creators, founders, and young builders.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onPrimaryClick} className="group inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-[0_10px_40px_rgba(6,182,212,0.35)] hover:shadow-[0_10px_50px_rgba(6,182,212,0.55)] transition">
              Join Forum
              <span className="ml-2 block h-2 w-2 rounded-full bg-white/70 group-hover:bg-white transition" />
            </button>
            <button onClick={onSecondaryClick} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
              Explore the Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
