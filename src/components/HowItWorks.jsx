import React from 'react'
import { UserPlus, ScanSearch, Handshake } from 'lucide-react'

const steps = [
  { title: 'Join the community', icon: UserPlus, desc: 'Create your profile and step into a network of ambitious builders.' },
  { title: 'Share or discover ideas', icon: ScanSearch, desc: 'Post what you’re exploring or join a project that inspires you.' },
  { title: 'Collaborate & grow', icon: Handshake, desc: 'Form squads, build momentum, and level up together.' },
]

function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_50%_-10%,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-slate-300">Three steps to turn sparks into momentum.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map(({ title, icon: Icon, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-[0_10px_30px_rgba(236,72,153,0.35)]">
                {i + 1}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
