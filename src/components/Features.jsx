import React from 'react'
import { Users, Share2, GraduationCap, HeartHandshake, Rocket } from 'lucide-react'

const features = [
  { title: 'Innovation Community', icon: Users, desc: 'A trusted network of peers building the future together.' },
  { title: 'Idea Sharing & Collaboration', icon: Share2, desc: 'Post ideas, form squads, and iterate quickly.' },
  { title: 'Mentorship Opportunities', icon: GraduationCap, desc: 'Guidance from experienced builders and operators.' },
  { title: 'Contribution & Support System', icon: HeartHandshake, desc: 'Contribute time, capital, or expertise to help projects thrive.' },
  { title: 'Startup Growth Ecosystem', icon: Rocket, desc: 'Access playbooks, talent, and capital pathways.' },
]

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_90%_10%,rgba(34,211,238,0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Key Features</h2>
          <p className="mt-3 text-slate-300">Everything you need to collaborate, learn, and build at speed.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl bg-slate-900/40 border border-white/10 p-6 backdrop-blur-sm hover:bg-slate-900/60 transition shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-slate-900">
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

export default Features
