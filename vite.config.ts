import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@@/': `${resolve(__dirname, 'src')}/`,
      '@/': `${resolve(__dirname, '.vitepress/theme')}/`,
      '#/': `${resolve(__dirname, 'types')}/`,
    },
  },
  plugins: [
    Components({
      dirs: [
        '.vitepress/theme/components',
      ],
      extensions: ['vue', 'ts'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: true,
    }),
    Icons(),
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
    include: [
      '@vueuse/core',
      'windicss/utils/style',
      'windicss',
      'json5',
      'prismjs',
      'prismjs/components/prism-css',
    ],
  },
})
