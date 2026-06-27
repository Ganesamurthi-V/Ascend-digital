import React from 'react'
import { motion, useInView, animate } from 'framer-motion'

export default function AnimatedCounter({ value, label, prefix = '', suffix = '', decimals = 0 }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [isInView, value])

  return (
    <motion.div ref={ref} className="text-center">
      <div className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
        {prefix}
        {display.toFixed(decimals)}
        {suffix}
      </div>
      <div className="text-xs text-ink-soft mt-1">{label}</div>
    </motion.div>
  )
}
