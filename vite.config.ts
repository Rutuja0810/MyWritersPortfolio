import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
import { fileURLToPath } from 'url';
import path from 'path'
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }), // Enable TypeScript checking
  ],
  resolve: {
    alias: {
      '@configs': path.resolve(__dirname, 'src/configs'),
      "@assets": path.resolve(__dirname, "src/attached_assets"),
      "@src": path.resolve(__dirname, "src")
    },
  }
})
