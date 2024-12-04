import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // custom port that the frontend will use to start on
  },
  resolve: {
    alias: {
      '@': '/src' // defining the @ as base import to the components
    }
  }
})