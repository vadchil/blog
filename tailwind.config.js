/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          gray: '#F5F5F5',
          'gray-dark': '#E5E5E5',
          blue: '#6B9BD1',
          'blue-light': '#A8C5E0',
          green: '#7FB3A3',
          'green-light': '#A8D5C7',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#404040',
            lineHeight: '1.75',
            a: {
              color: '#6B9BD1',
              '&:hover': {
                color: '#7FB3A3',
              },
            },
            h1: {
              color: '#262626',
              fontWeight: '600',
            },
            h2: {
              color: '#262626',
              fontWeight: '600',
            },
            h3: {
              color: '#262626',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [],
}

