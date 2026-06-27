import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const WHATSAPP_NUMBER = '919789720109'
const WHATSAPP_CHAT_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Ascend Labs! I'd like to know more about getting a website built for my business."
)}`

// Builds a formatted WhatsApp message from the form fields and opens wa.me with it pre-filled.
function buildWhatsAppLink({ name, phone, email, businessType, message }) {
  const lines = [
    'New enquiry from the Ascend Labs website:',
    '',
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Email:* ${email}`,
    `*Business type:* ${businessType}`,
    message ? `*Project details:* ${message}` : null,
  ].filter(Boolean)

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'Gym / Fitness Studio',
    message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const link = buildWhatsAppLink(form)
    // Opens WhatsApp (app on mobile, WhatsApp Web on desktop) with the message ready to send.
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Let's get started"
          title="Tell us about your business"
          description="Fill out the form and it'll open WhatsApp with everything pre-filled — just hit send and we'll reply fast."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_1.2fr] rounded-3xl overflow-hidden shadow-glow-lg"
        >
          <div className="bg-gradient-to-br from-electric via-violet to-magenta p-10 flex flex-col">
            <h3 className="font-display font-bold text-2xl text-white mb-3">Let's build something great</h3>
            <p className="text-white/80 text-sm mb-10">
              Prefer to skip the form? Reach out directly — we respond fast and never hard-sell.
            </p>
            <div className="flex flex-col gap-5 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <Phone size={18} /> +91 97897 20109
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} /> hello@ascendlabs.in
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} /> Puducherry, India
              </div>
            </div>

            <a
              href={WHATSAPP_CHAT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto self-center inline-flex max-w-max items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white py-3.5 px-5 font-semibold hover:brightness-105 transition-all whitespace-nowrap"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="bg-white p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="form-input"
                    value={form.name}
                    onChange={update('name')}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    placeholder="+91"
                    className="form-input"
                    value={form.phone}
                    onChange={update('phone')}
                  />
                </Field>
              </div>
              <Field label="Email">
                <input
                  required
                  type="email"
                  placeholder="you@business.com"
                  className="form-input"
                  value={form.email}
                  onChange={update('email')}
                />
              </Field>
              <Field label="Business type">
                <select className="form-input" value={form.businessType} onChange={update('businessType')}>
                  <option>Gym / Fitness Studio</option>
                  <option>Restaurant / Café</option>
                  <option>Clinic / Healthcare</option>
                  <option>Retail / Shop</option>
                  <option>Salon / Spa</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Tell us about your project">
                <textarea
                  rows={4}
                  placeholder="What does your business need?"
                  className="form-input resize-none"
                  value={form.message}
                  onChange={update('message')}
                />
              </Field>
              <button
                type="submit"
                className="mt-2 self-center inline-flex max-w-max items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-electric via-violet to-magenta py-4 px-5 font-semibold text-white shadow-glow hover:scale-[1.01] transition-transform whitespace-nowrap"
              >
                <MessageCircle size={18} /> Send via WhatsApp
              </button>
              <p className="text-xs text-ink-soft text-center -mt-1">
                This opens WhatsApp with your details filled in — just tap send.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-semibold text-ink-soft uppercase tracking-wide">
      {label}
      {children}
    </label>
  )
}
