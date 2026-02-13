/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000', // True Black
        'secondary': '#f5f5f7', // Apple Platinum/White
        'accent': '#2997ff', // Apple Blue
        'dark-bg': '#000000', // Background
        'surface': '#1d1d1f', // Apple Dark Gray
        'glass': 'rgba(29, 29, 31, 0.72)', // Frosted
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sf': ['SF Pro Display', 'Inter', 'sans-serif'], // Fallback to Inter
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 128, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 255, 0.5)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      }
    },
  },
  plugins: [],
}
