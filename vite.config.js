import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GHOST-system/', // EXACTLY this (case-sensitive)
  plugins: [react()],
})
