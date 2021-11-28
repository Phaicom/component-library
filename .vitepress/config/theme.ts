import { sidebar } from './sidebar'
import { nav } from './nav'
import type { DefaultTheme } from '#/config'

const themeConfig: DefaultTheme.Config = {
  repo: 'Phaicom/component-library',
  logo: '/assets/logo.svg',
  docsDir: '.',
  docsBranch: 'main',
  docsRepo: 'Phaicom/component-library',
  editLinks: true,
  editLinkText: 'Suggest changes to this page',
  nav,
  sidebar,
}

export default themeConfig
