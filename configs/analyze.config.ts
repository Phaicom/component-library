import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
      '#/': `${resolve(__dirname, 'types')}/`,
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    visualizer({
      open: true,
      title: 'Zrch Bundle Visualizer',
    }),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      name: 'zrchcss',
      formats: ['es', 'umd', 'iife'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  optimizeDeps: {
    include: ['windicss/utils/style', 'windicss'],
  },
  publicDir: false,
})
