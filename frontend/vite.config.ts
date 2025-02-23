import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/v1': {
        target: 'http://localhost:3000',
        secure: false,
      },
    }
  }
})
