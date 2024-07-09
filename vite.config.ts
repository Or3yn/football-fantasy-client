import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, "environment");
  const env = loadEnv(mode, envDir, '');
  console.log('Loaded environment variables:', env);

  return {
    plugins: [react()],
    base: './',
    server: {
      host: '0.0.0.0',
      strictPort: true,
      open: false,
      port: 3000,
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