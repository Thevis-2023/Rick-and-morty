import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/Thevis-2023/Rick-and-morty",
  plugins: [react()],
})
