import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  // Используем переменную окружения PORT, если она доступна
  const port = parseInt(process.env.PORT) || 8080;

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: port,
      strictPort: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  };
});
