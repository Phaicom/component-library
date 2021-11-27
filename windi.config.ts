import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{ts,vue}',
      '.vitepress/theme/**/*.{ts,vue}',
      'guide/**/*.{ts,vue}',
    ],
  },

  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: 'none',
          color: 'inherit',
          a: {
            color: '#48B0F1',
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
