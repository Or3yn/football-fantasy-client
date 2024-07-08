# Используйте официальный образ Node.js
FROM node:14 AS builder

WORKDIR /app

# Копирование файлов проекта в рабочую директорию
COPY . .

# Создание директории build и установка зависимостей
RUN mkdir -p build && \
    yarn install

# Логирование начала процесса сборки
RUN echo "Building the app..."

# Сборка проекта
RUN yarn build

# Логирование окончания процесса сборки
RUN echo "App built successfully."

# Обновление списка пакетов и установка nginx-core
RUN echo "Updating packages and installing nginx-core..." && \
    apt-get update && \
    apt-get install -y nginx-core

# Логирование окончания установки nginx-core
RUN echo "Nginx-core installed."

# Копирование собранных файлов в директорию nginx
COPY build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
