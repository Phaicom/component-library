import 'virtual:windi.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

import './style/vars.css'
import './style/all.css'
import './style/scrollbar.css'
import './style/markdown.css'

export default {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.config.compilerOptions.isCustomElement = tag => tag === 'preview-box'
  },
}
