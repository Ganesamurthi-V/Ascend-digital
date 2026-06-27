import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center mb-16"
    >
      <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-violet mb-5">
        {eyebrow}
      </span>
      <h2 className="font-display font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-soft">{description}</p>
      )}
    </motion.div>
  )
}
