module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  // Остальная часть конфигурации...
};
