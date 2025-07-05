// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // 👈 this should match your GitHub repo name
  plugins: [react()],
})
