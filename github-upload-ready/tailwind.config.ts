import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black:   '#0f1723',
          charcoal:'#263c56',
          surface: '#334b66',
          border:  '#436181',
          gold:    '#01afd1',
          'gold-muted': '#018cab',
          silver:  '#9cb1c9',
          white:   '#ffffff',
        }
      },
      fontFamily: {
        sans:    ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        wider:  '0.15em',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  plugins: [],
};

export default config;
