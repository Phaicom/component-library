import { resolve } from 'path'
// import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
      '#/': `${resolve(__dirname, 'types')}/`,
    },
  },
  plugins: [
    // vue(),
    WindiCSS(),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ['windicss'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['windicss/utils/style', 'windicss'],
  },
})
