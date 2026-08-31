/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090A0C',
        surface: {
          DEFAULT: '#111317',
          subtle: '#16191F',
          elevated: '#1D212A',
        },
        gold: {
          50: '#FAF6EB',
          100: '#F5ECCF',
          200: '#EBD89F',
          300: '#DFC26F',
          400: '#D4AF37', // Luxury Brand Gold
          500: '#C59B27',
          600: '#A67C1E',
          700: '#805B17',
          800: '#5C3F12',
          900: '#3D280B',
        },
        accent: {
          DEFAULT: '#D4AF37',
          glow: '#F59E0B',
        },
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'apple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'gold-glow': '0 0 30px -5px rgba(212, 175, 55, 0.3)',
      },
    },
  },
  plugins: [],
}
