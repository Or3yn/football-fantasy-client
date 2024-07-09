import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, "environment");
  const env = loadEnv(mode, envDir, '');

  return {
    plugins: [react()],
    base: './',
    server: {
      host: '0.0.0.0',
      strictPort: true,
      open: false,
    },
    build: {
      outDir: 'dist',
      assetsDir: '',
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      __VITE_API_URL__: JSON.stringify(env.VITE_API_URL),
      __VITE_API_KEY__: JSON.stringify(env.VITE_API_KEY),
    },
  };
});