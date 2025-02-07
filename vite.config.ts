import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api.xro": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
