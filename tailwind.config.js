/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h2: {
              color: '#111827',
              fontWeight: '700',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.75',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 