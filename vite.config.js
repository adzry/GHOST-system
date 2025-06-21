// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GHOST-system/', // ← THIS MUST MATCH REPO NAME
  plugins: [react()],
})
