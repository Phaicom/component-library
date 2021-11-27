import 'virtual:windi.css'

import type { Theme } from 'vitepress'

export default <Theme>{
  enhanceApp({ app }) {
    app.config.compilerOptions.isCustomElement = tag => tag === 'preview-box'
  },
}
