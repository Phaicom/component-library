import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'
import typography from 'windicss/plugin/typography'
import { theme, safelist, shortcuts, utilities } from './windicss'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{ts,vue}',
      '.vitepress/theme/**/*.{ts,vue}',
      'guide/**/*.{ts,vue}',
    ],
  },
  safelist: [
    'pb-5',
    'logo-float-xl',
    'dark:text-white',
    'opacity-85',
    ...safelist,
  ],
  shortcuts: {
    'logo-float-xl': 'text-6xl m-2 mr-6 float-right',
    ...shortcuts,
  },
  theme: {
    extend: {
      ...theme,
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
  plugins: [
    typography(),
    plugin(({ addUtilities }) => {
      addUtilities({ ...utilities.borders, ...utilities.elevations })
    }),
  ],
})
