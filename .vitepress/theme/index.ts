import 'virtual:windi.css'

import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

export default <Theme>{
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.compilerOptions.isCustomElement = tag => tag === 'preview-box'
  },
}
