import { UserConfig } from 'vitepress'
import themeConfig from './theme'
import { DefaultTheme } from '#/config'

const config: UserConfig<DefaultTheme.Config> = {
  lang: 'en-US',
  title: 'Zrch',
  description: 'A lightweight Vue 3 component library',
  themeConfig,
  srcExclude: ['README.md'],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'preview-box',
      },
    },
  },
}

export default config
