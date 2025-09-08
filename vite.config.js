import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PatterNia/', // GitHub Pages base path - matches repository name
  build: {
    outDir: 'dist',
  },
})
