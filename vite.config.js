// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GHOST-system/', // <<< Must match your repo name!
  plugins: [react()],
})
