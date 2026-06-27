import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const projects = [
  { name: 'PowerHouse Gym', category: 'Fitness Studio', gradient: 'from-electric/40 to-violet/40' },
  { name: 'Spice Route Kitchen', category: 'Restaurant', gradient: 'from-violet/40 to-magenta/40' },
  { name: 'Smile Dental Care', category: 'Healthcare Clinic', gradient: 'from-magenta/40 to-electric/40' },
  { name: 'Urban Thread Co.', category: 'Retail Brand', gradient: 'from-electric/40 to-magenta/30' },
  { name: 'Anand Properties', category: 'Real Estate', gradient: 'from-violet/40 to-electric/30' },
  { name: 'Lumière Beauty Bar', category: 'Salon & Spa', gradient: 'from-magenta/40 to-violet/30' },
]

function BrowserMock({ gradient }) {
  return (
    <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${gradient} p-4 overflow-hidden`}>
      <div className="absolute inset-3 rounded-xl bg-ink/80 backdrop-blur-sm border border-white/10 flex flex-col overflow-hidden">
        <div className="h-7 flex items-center gap-1.5 px-3 bg-white/5 border-b border-white/5">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-2.5">
          <div className="h-2.5 w-2/3 rounded bg-white/15" />
          <div className="h-2.5 w-1/2 rounded bg-white/10" />
          <div className="flex-1 mt-2 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.03]" />
          <div className="flex gap-2 mt-1">
            <div className="h-6 w-16 rounded-md bg-white/20" />
            <div className="h-6 w-16 rounded-md bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 px-4 sm:px-6 bg-ink/[0.02]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Recent work"
          title="A glimpse of what we've shipped"
          description="A sample of recent projects across fitness, hospitality, healthcare and retail."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <BrowserMock gradient={p.gradient} />
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <p className="text-xs text-ink-soft uppercase tracking-wide">{p.category}</p>
                  <p className="font-display font-semibold text-ink">{p.name}</p>
                </div>
                <span className="text-violet text-sm opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
