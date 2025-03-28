import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: process.env.NODE_ENV === "development"
      ? {
          "/api": {
            target: "http://localhost:3000", // Local backend for development
            changeOrigin: true,
          },
        }
      : undefined, // No proxy in production
  },
});
