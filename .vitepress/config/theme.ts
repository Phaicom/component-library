import { sidebar } from './sidebar'
import { nav } from './nav'
import type { DefaultTheme } from '#/config'

const themeConfig: DefaultTheme.Config = {
  docsDir: '.',
  nav,
  sidebar,
}

export default themeConfig
