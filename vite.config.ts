import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: parseInt(process.env.VITE_PORT) || 8080,
    host: '0.0.0.0',
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
