/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0a14',
        'ink-soft': '#5a5a72',
        surface: '#f7f7fb',
        electric: '#4f5bff',
        violet: '#9b5cff',
        magenta: '#d24fd6',
        lime: '#caff5a',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #4f5bff 0%, #9b5cff 50%, #d24fd6 100%)',
        'aurora-soft': 'linear-gradient(135deg, rgba(79,91,255,0.12), rgba(155,92,255,0.12), rgba(210,79,214,0.12))',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(155,92,255,0.45)',
        'glow-lg': '0 30px 80px -20px rgba(79,91,255,0.4)',
        glass: '0 8px 32px 0 rgba(31,38,135,0.1)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        gradient: 'gradient 8s ease infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-24px) translateX(14px) rotate(3deg)' },
          '66%': { transform: 'translateY(16px) translateX(-18px) rotate(-3deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
