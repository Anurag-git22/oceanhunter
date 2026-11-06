/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2B2D8E',
          50: '#F0F1FA',
          100: '#DFE1F5',
          600: '#232578',
          700: '#1F2167',
          800: '#171850',
          900: '#0F1035',
          950: '#090A22',
        },
        brandRed: {
          DEFAULT: '#E3262E',
          hover: '#C81B23',
          light: '#FEE2E2',
        },
        oceanTeal: {
          DEFAULT: '#00A896',
          dark: '#028090',
          light: '#02C39A',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        heading: ['"Oswald"', '"Bebas Neue"', 'sans-serif'],
        sans: ['"Poppins"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'ocean': '0 10px 30px -10px rgba(43, 45, 142, 0.25)',
        'card-hover': '0 20px 40px -15px rgba(43, 45, 142, 0.2)',
      }
    },
  },
  plugins: [],
}
