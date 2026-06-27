import React from 'react'
import AscendLine from './components/AscendLine.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LogoMarquee from './components/LogoMarquee.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <div className="relative bg-surface min-h-screen">
      <AscendLine />
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
