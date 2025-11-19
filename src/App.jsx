import React, { useRef } from 'react'
import { Menu } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Mentor from './components/Mentor'
import Impact from './components/Impact'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  const communityRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(59,130,246,0.18),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_500px_at_120%_20%,rgba(236,72,153,0.15),transparent_60%)]" />

      {/* Top nav */}
      <header className="relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_25px_rgba(6,182,212,0.45)]" />
            <span className="text-white font-semibold tracking-wide">FORUM</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <button onClick={() => scrollTo('about')} className="hover:text-white">About</button>
            <button onClick={() => scrollTo('features')} className="hover:text-white">Features</button>
            <button onClick={() => scrollTo('mentor')} className="hover:text-white">Mentor</button>
            <button onClick={() => scrollTo('impact')} className="hover:text-white">Impact</button>
            <button onClick={() => scrollTo('how')} className="hover:text-white">How it works</button>
            <button onClick={() => scrollTo('cta')} className="rounded-lg bg-cyan-500 text-slate-900 px-4 py-2 font-semibold hover:shadow-[0_10px_35px_rgba(6,182,212,0.45)]">Join</button>
          </nav>
          <button className="md:hidden text-slate-300" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Main sections */}
      <main className="relative z-10">
        <Hero onPrimaryClick={() => scrollTo('cta')} onSecondaryClick={() => scrollTo('features')} />
        <About />
        <Features />
        <Mentor />
        <Impact />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500" />
            <span className="text-slate-300">FORUM</span>
          </div>
          <p className="text-slate-400 text-sm">Where ideas meet opportunity.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
