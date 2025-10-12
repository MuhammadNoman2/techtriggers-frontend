import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    allowedHosts: ['.ngrok-free.app'], // ✅ Allow ngrok tunnel domains
    port: 5173, // optional (use your actual dev port if different)
  },
})
