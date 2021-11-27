import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.config.compilerOptions.isCustomElement = tag => tag === 'preview-box'
  },
}
