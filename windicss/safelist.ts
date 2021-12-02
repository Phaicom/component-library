import { generateColorSafelist, generateSafeList } from './utils'
import { theme } from './theme'
import { utilities } from './utilities'

export const safelist = [
  ...generateColorSafelist(),
  ...generateSafeList(theme),
  ...generateSafeList(utilities),
]
