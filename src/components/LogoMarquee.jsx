import React from 'react'

const items = [
  'Fitness Studios', 'Restaurants', 'Dental Clinics', 'Real Estate', 'Salons & Spas',
  'Retail Brands', 'Law Firms', 'Architects', 'Cafés', 'Gyms',
]

export default function LogoMarquee() {
  const loop = [...items, ...items]
  return (
    <div className="relative border-y border-ink/5 bg-white py-6 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-12">
        {loop.map((item, i) => (
          <span key={i} className="text-ink-soft font-display font-semibold text-lg tracking-wide whitespace-nowrap">
            {item}
            <span className="mx-6 text-violet/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
