import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We learn about your business, customers and goals in a free 20-minute call.', h: 'h-24' },
  { num: '02', title: 'Design Concept', desc: 'You\u2019ll see a custom homepage design within 2\u20133 days, built around your brand.', h: 'h-32' },
  { num: '03', title: 'Build & Refine', desc: 'We build every page, you review and request changes \u2014 unlimited rounds.', h: 'h-40' },
  { num: '04', title: 'Launch & Support', desc: 'We go live, connect your domain, and stay on for support after launch.', h: 'h-48' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="How it works"
          title="From first call to launch, in four ascending steps"
          description="A clear, predictable process — you'll always know what's happening and when your site goes live."
        />

        <div className="flex items-end justify-center gap-3 sm:gap-6 mb-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              style={{ transformOrigin: 'bottom' }}
              className={`relative w-16 sm:w-24 ${s.h} rounded-t-2xl bg-gradient-to-t from-electric/30 via-violet/50 to-magenta/70 flex items-end justify-center pb-3 shadow-glow`}
            >
              <span className="font-display font-extrabold text-white/80 text-sm">{s.num}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <h3 className="font-display font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
