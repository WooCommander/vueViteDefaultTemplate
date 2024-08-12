import { fileURLToPath, URL } from 'node:url'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@pages": fileURLToPath(new URL('./src/pages', import.meta.url)),
    }
  }
})
