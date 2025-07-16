import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // APIリクエストをバックエンドへ転送(プレフィックス（/api)で始まるリクエストのパスは以下処理を通る)
      '/api': {
        target: 'http://localhost:8080', // Spring BootのバックエンドURL
        rewrite: (path) => path.replace(/^\/api/, ''), // リクエストの/api部分を削除
      }
    }
  }
})
