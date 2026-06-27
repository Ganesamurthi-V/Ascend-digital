import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const faqs = [
  {
    q: 'How long does it actually take to launch?',
    a: 'Starter sites typically launch in 7 days, Growth in 10\u201314 days, and Premium projects depend on scope \u2014 we\u2019ll give you an exact timeline after our first call.',
  },
  {
    q: 'Do I need to provide my own content and photos?',
    a: 'No \u2014 you can send what you have and we\u2019ll fill the gaps with professional copywriting and curated visuals. Growth and Premium plans include full copywriting.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Every site we build includes on-page SEO fundamentals \u2014 fast load times, proper headings, metadata and Google Business integration \u2014 so you start strong from day one.',
  },
  {
    q: 'What happens after the website is live?',
    a: 'Each plan includes a post-launch support window for fixes and tweaks. After that, we offer affordable monthly care plans if you\u2019d like us to keep things updated.',
  },
  {
    q: 'Can I make changes after the site is built?',
    a: 'Yes \u2014 during the build phase you get unlimited revision rounds, and afterwards we\u2019re always available for updates, whether through a support plan or one-off requests.',
  },
]

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button onClick={onClick} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-semibold text-ink text-sm sm:text-base">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="text-violet flex-shrink-0">
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-ink-soft text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 bg-ink/[0.02]">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Questions, answered" title="Frequently asked questions" />
        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} {...f} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
