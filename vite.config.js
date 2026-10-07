import fs from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hero videos are optional. Drop mp4 files into public/videos and rebuild, and they appear.
const videos = fs.existsSync('public/videos')
  ? fs.readdirSync('public/videos').filter((f) => /\.(mp4|webm)$/i.test(f)).map((f) => `/videos/${f}`)
  : []

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  define: { __VIDEOS__: JSON.stringify(videos) },
  ssr: { noExternal: ['lucide-react'] },
})
