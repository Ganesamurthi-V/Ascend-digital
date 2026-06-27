import React from 'react'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto border-t border-ink/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-soft">
        <span>© 2026 Ascend Labs. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-ink transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-ink transition-colors">Portfolio</a>
          <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
