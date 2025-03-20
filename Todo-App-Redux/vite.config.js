import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://musical-space-happiness-4jj55wjw79pjhjj6j-3000.app.github.dev',
        changeOrigin: true,
      }
    }
  }
})
