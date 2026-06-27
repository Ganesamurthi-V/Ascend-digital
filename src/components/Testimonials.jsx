import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const testimonials = [
  {
    quote: 'Enquiries through WhatsApp tripled within the first month of launch. The site finally looks like the gym actually feels — high-energy and professional.',
    name: 'Arun Kumar',
  },
  {
    quote: 'They handled everything — copy, design, photo placement — and delivered in nine days flat. I just had to approve things.',
    name: 'Priya Raman',
  },
  {
    quote: 'We were skeptical about spending on a website but it paid for itself in the first two bookings. A different league from our old site.',
    name: 'Vikram Anand',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-28 px-4 sm:px-6 bg-ink/[0.02]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Client stories" title="Don't take our word for it" description="Real feedback from business owners we've worked with recently." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-7"
            >
              <div className="flex gap-1 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric via-violet to-magenta" />
                <p className="text-ink font-semibold text-sm">{t.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
