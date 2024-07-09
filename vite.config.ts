import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Укажите базовый путь, если ваше приложение размещено в подпапке
  server: {
    host: '0.0.0.0', // Разрешить подключения с любого IP-адреса
    strictPort: true, // Автоматически выбрать другой порт, если указанный занят
    open: true, // Автоматически открывать браузер после запуска
  },
  build: {
    outDir: 'dist', // Папка для вывода сборки
    assetsDir: '', // Не добавлять префикс к именам файлов
  },
});
