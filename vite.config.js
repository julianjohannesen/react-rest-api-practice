import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // Was getting an odd error about axios and one one person suggested this fix. Other people suggested a wide variety of other fixes, including clearing the browser cache, deleting node_modules and rebuilding, etc.
    exclude: ['axios']
  }
})
