import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{ts,vue}',
    ],
  },
  safelist: [
    'pb-5',
    'logo-float-xl',
    'dark:text-white',
    'opacity-85',
  ],
  shortcuts: {
    'logo-float-xl': 'text-6xl m-2 mr-6 float-right',
  },
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: {
        primary: {
          DEFAULT: '#6CC4C8',
          50: '#F2FAFA',
          100: '#E3F4F4',
          200: '#C5E8E9',
          300: '#A7DCDE',
          400: '#8AD0D3',
          500: '#6CC4C8',
          600: '#45B2B7',
          700: '#358B8E',
          800: '#266366',
          900: '#173B3D',
        },
      },
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: 'none',
          color: 'inherit',
          a: {
            color: '#6CC4C8',
            textDecoration: 'none',
          },
          b: { color: 'inherit' },
          strong: { color: 'inherit' },
          em: { color: 'inherit' },
          h1: { color: 'inherit' },
          h2: { color: 'inherit' },
          h3: { color: 'inherit' },
          h4: { color: 'inherit' },
          code: { color: 'inherit' },
          pre: { color: 'inherit', fontSize: '.9rem' },
          thead: { color: 'inherit' },
          blockquote: { color: 'inherit' },
          table: {
            borderCollapse: 'collapse',
          },
        },
      },
    },
  },
  plugins: [typography()],
})
