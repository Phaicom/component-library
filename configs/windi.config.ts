import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'
import { theme, safelist, shortcuts, utilities } from '../windicss'

export default defineConfig({
  preflight: true,
  extract: {
    include: [
      'src/**/*.{ts,vue}',
    ],
  },
  safelist: [
    ...safelist,
  ],
  shortcuts: {
    ...shortcuts,
  },
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({ ...utilities.borders, ...utilities.elevations })
    }),
  ],
})
