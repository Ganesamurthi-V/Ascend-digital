import React from 'react'
import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '919789720109' // +91 9789720109
const DEFAULT_MESSAGE = "Hi Ascend Labs! I'd like to know more about getting a website built for my business."

export default function WhatsAppButton() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10" fill="#fff">
        <path d="M16.004 3C9.378 3 4 8.373 4 14.996c0 2.347.685 4.533 1.873 6.37L4.5 28.5l7.34-1.93a12.93 12.93 0 0 0 4.164.7h.005c6.627 0 12.004-5.373 12.004-11.996C28.013 8.373 22.636 3 16.004 3zm0 21.79h-.004a10.74 10.74 0 0 1-5.47-1.498l-.392-.233-4.075 1.072 1.09-3.974-.256-.408a10.76 10.76 0 0 1-1.65-5.757c0-5.951 4.85-10.79 10.802-10.79 2.886 0 5.598 1.126 7.637 3.166a10.71 10.71 0 0 1 3.16 7.628c0 5.952-4.85 10.794-10.842 10.794zm6.122-8.09c-.336-.168-1.985-.978-2.293-1.09-.307-.112-.531-.168-.755.169-.224.336-.866 1.09-1.06 1.314-.196.224-.392.252-.728.084-.336-.168-1.418-.523-2.703-1.668-.999-.89-1.673-1.99-1.869-2.326-.196-.336-.021-.518.154-.686.168-.168.392-.448.588-.672.196-.224.26-.392.392-.644.131-.252.066-.476-.04-.644-.107-.168-.946-2.27-1.298-3.087-.343-.797-.692-.685-.946-.7-.224-.014-.475-.018-.728-.018-.252 0-.66.094-.953.448-.336.392-1.288 1.26-1.288 3.073 0 1.812 1.319 3.564 1.5 3.812.18.252 2.474 3.78 6.114 5.213 3.64 1.434 3.64.957 4.298.897.658-.06 2.13-.866 2.43-1.7.299-.84.299-1.56.21-1.7-.09-.14-.327-.224-.683-.392z" />
      </svg>
    </motion.a>
  )
}
