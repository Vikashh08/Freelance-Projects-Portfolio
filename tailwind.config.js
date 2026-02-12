/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF0080', // Electric Pink
        'secondary': '#00FFFF', // Cyber Cyan
        'accent': '#7928CA', // Vivid Violet
        'dark-bg': '#050505', // Pure Dark
        'surface': '#121212', // Slightly lighter dark
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'fira': ['Fira Code', 'monospace'],
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
