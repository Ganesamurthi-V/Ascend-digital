import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10 grid-fade" />
      <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-electric/20 blur-[120px] animate-float-slow -z-10" />
      <div className="absolute top-10 -right-40 w-[620px] h-[620px] rounded-full bg-violet/20 blur-[120px] animate-float-slow -z-10" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-magenta/15 blur-[120px] animate-float-slow -z-10" style={{ animationDelay: '-8s' }} />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-violet mb-8"
        >
          <Sparkles size={14} />
          Trusted by 60+ growing businesses
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display font-extrabold leading-[1.05] text-[clamp(2.4rem,7vw,5.2rem)] text-ink max-w-4xl mx-auto"
        >
          Websites engineered to <span className="text-gradient">turn clicks into clients</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-ink-soft text-lg max-w-xl mx-auto"
        >
          Ascend Labs designs and builds premium, high-performance websites for businesses
          ready to look as good online as they do in person — live in as little as 7 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-electric via-violet to-magenta px-7 py-4 font-semibold text-white shadow-glow-lg hover:scale-[1.03] transition-transform"
          >
            Start Your Project
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-2xl glass px-7 py-4 font-semibold text-ink hover:bg-white/80 transition-colors"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 glass rounded-3xl p-2 max-w-3xl mx-auto shadow-glow"
        >
          <div className="rounded-[20px] bg-white grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 py-8">
            <AnimatedCounter value={3.2} suffix="×" label="more enquiries" decimals={1} />
            <AnimatedCounter value={1.5} prefix="<" suffix="s" label="avg. load time" decimals={1} />
            <AnimatedCounter value={98} label="PageSpeed score" />
            <AnimatedCounter value={60} suffix="+" label="sites launched" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
