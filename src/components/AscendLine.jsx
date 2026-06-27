import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * AscendLine — the page's signature element.
 * A glowing gradient line that climbs the right edge of the viewport
 * as the visitor scrolls, visually reinforcing the brand promise: "ascend."
 * A small comet-head marks current scroll progress.
 */
export default function AscendLine() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 })

  return (
    <div className="fixed right-4 md:right-6 top-0 bottom-0 z-50 hidden sm:flex items-stretch pointer-events-none">
      <div className="relative w-px h-full bg-ink/10 mx-auto">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top bg-gradient-to-b from-electric via-violet to-magenta"
          style={{ scaleY: smooth, height: '100%' }}
        />
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-magenta shadow-glow"
          style={{
            top: smooth.get ? undefined : 0,
            offsetDistance: undefined,
          }}
        />
        <ProgressDot smooth={smooth} />
      </div>
    </div>
  )
}

function ProgressDot({ smooth }) {
  const [top, setTop] = React.useState('0%')
  React.useEffect(() => {
    const unsub = smooth.on('change', (v) => setTop(`${v * 100}%`))
    return () => unsub()
  }, [smooth])

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-glow-lg ring-2 ring-violet/60"
      style={{ top }}
    />
  )
}
