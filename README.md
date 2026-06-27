# Ascend Labs — Premium Website (React + Tailwind + Framer Motion)

A next-level, light, premium, conversion-focused website built with a modern stack:

- **React 18** — component-based architecture, one file per section
- **Vite** — instant dev server & fast builds
- **Tailwind CSS** — utility-first styling with custom design tokens (colors, gradients, glow shadows, animations)
- **Framer Motion** — scroll-reveal animations, hover tilt effects, animated counters, smooth accordion
- **Lucide React** — crisp, consistent icon set

## Signature design element

A glowing **"Ascend Line"** runs down the right edge of the viewport and fills with a blue → violet → magenta gradient as you scroll — a literal visual metaphor for the brand name, paired with an ascending staircase graphic in the Process section.

## Project structure

```
ascend-digital/
├── index.html              # Vite entry HTML + SEO meta tags + schema.org JSON-LD
├── package.json
├── vite.config.js
├── tailwind.config.js       # custom colors, gradients, shadows, keyframes
├── postcss.config.js
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # assembles all sections
    ├── index.css            # Tailwind directives + custom utility classes
    └── components/
        ├── AscendLine.jsx       # signature scroll-progress element
        ├── Navbar.jsx           # sticky glass navbar + mobile menu
        ├── Hero.jsx             # hero with aurora blobs + stat card
        ├── AnimatedCounter.jsx  # count-up stat animation
        ├── LogoMarquee.jsx      # infinite scrolling industry strip
        ├── SectionHeading.jsx   # reusable section header
        ├── Services.jsx         # 6 service cards with mouse-tilt effect
        ├── Portfolio.jsx        # browser-mockup project cards
        ├── Process.jsx          # ascending staircase + 4-step process
        ├── Testimonials.jsx     # client reviews
        ├── FAQ.jsx              # animated accordion
        ├── Contact.jsx          # split form + contact info, with submit state
        └── Footer.jsx
```

## Getting started

```bash
npm install
npm run dev       # starts dev server at http://localhost:5173
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Customizing

- **Colors / gradients**: edit `tailwind.config.js` → `theme.extend.colors` and `backgroundImage`.
- **Copy**: edit the relevant component file directly — all content lives inline as plain JS arrays/objects (e.g. `faqs` in `FAQ.jsx`, `testimonials` in `Testimonials.jsx`).
- **WhatsApp number**: set in `WHATSAPP_NUMBER` at the top of `Contact.jsx` and `WhatsAppButton.jsx` (currently `+91 97897 20109`).
- **Contact form**: currently client-side only (shows a success state on submit). Wire it up to a backend, Formspree, or an email API of your choice inside `Contact.jsx`'s `handleSubmit`.
- **Fonts**: Sora (display) + Inter (body) are loaded via Google Fonts in `index.html`.

## Deploying

This is a standard Vite app — deploy the `/dist` folder (after `npm run build`) to Vercel, Netlify, Cloudflare Pages, or any static host.
