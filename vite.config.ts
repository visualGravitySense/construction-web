import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages
  // В development используем '/', в production на GitHub Pages - из переменной окружения
  // Если VITE_BASE не установлен, используем '/' (для локальной разработки)
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

