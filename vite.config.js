import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConifig.browser',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
