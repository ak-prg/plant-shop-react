import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/plant-shop-react/",
  plugins: [react()],
})
