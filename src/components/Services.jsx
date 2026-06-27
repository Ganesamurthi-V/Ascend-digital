import React from 'react'
import { motion } from 'framer-motion'
import { LayoutTemplate, Search, Smartphone, PenLine, MessageCircle, RefreshCw } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Custom Website Design',
    desc: 'Bespoke, on-brand designs built from scratch — never a recycled template — tailored to how your customers search and decide.',
  },
  {
    icon: Search,
    title: 'SEO Foundation',
    desc: 'Clean code, fast load times, and on-page SEO built in from day one so you start showing up on Google instead of starting from zero.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Build',
    desc: 'Over 70% of your visitors browse on a phone. Every site we ship is designed mobile-first, then scaled up — not the other way round.',
  },
  {
    icon: PenLine,
    title: 'Conversion-Focused Copy',
    desc: 'We write the words too — clear, persuasive copy structured around what makes a visitor pick up the phone or fill out your form.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & Forms Integration',
    desc: 'Direct WhatsApp click-to-chat, booking forms and call buttons — so enquiries land exactly where you already manage your business.',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Support & Updates',
    desc: 'Sites stay fresh after launch — content updates, small fixes and check-ins so your website keeps performing, not just sitting there.',
  },
]

function ServiceCard({ icon: Icon, title, desc, i }) {
  const cardRef = React.useRef(null)
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 8 })
  }
  const reset = () => setTilt({ x: 0, y: 0 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass rounded-3xl p-8 transition-transform duration-200 will-change-transform hover:bg-white/80"
    >
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric via-violet to-magenta flex items-center justify-center shadow-glow mb-6">
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="font-display font-bold text-lg text-ink mb-2">{title}</h3>
      <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your business needs to win online"
          description="From first impression to final booking — every piece of your website is designed to move someone from curious to convinced."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
