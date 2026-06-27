import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass shadow-glass' : 'bg-transparent border border-transparent'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-lg text-ink">
          <span className="relative inline-flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-violet to-magenta animate-pulse" />
          </span>
          Ascend<span className="text-gradient">Labs</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-br from-electric via-violet to-magenta text-white px-4 py-2.5 text-sm font-semibold shadow-glow hover:scale-[1.03] transition-transform"
          >
            Get a Quote
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-6xl mx-auto mt-2 glass rounded-2xl p-5 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink-soft text-base font-medium">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-br from-electric via-violet to-magenta text-white px-4 py-3 text-sm font-semibold mt-1"
            >
              Get a Quote <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
