import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< Updated upstream
  plugins: [vue()],
  base: '/guessing-game/',
=======
  base: '/guessing-game/',
  plugins: [vue()],
>>>>>>> Stashed changes
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})
