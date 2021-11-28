import { UserConfig } from 'vitepress'
import themeConfig from './theme'
import { mdRenderFilename } from './markdown'
import head from './head'
import { metaData } from './constants'
import { DefaultTheme } from '#/config'

const config: UserConfig<DefaultTheme.Config> = {
  title: 'Zrch CSS',
  description: metaData.description,
  head,
  themeConfig,
  srcExclude: ['README.md'],
  markdown: {
    config(md) {
      md.use(mdRenderFilename)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'preview-box',
      },
    },
  },
}

export default config
