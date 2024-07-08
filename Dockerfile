# Используйте официальный образ Node.js
FROM node:14 AS builder

WORKDIR /app

# Копирование файлов проекта в рабочую директорию
COPY . .

# Логирование начала процесса установки зависимостей
RUN echo "Installing dependencies..." && \
    mkdir -p build && \
    yarn install

# Логирование окончания установки зависимостей
RUN echo "Dependencies installed."

# Логирование начала процесса сборки
RUN echo "Building the app..." && \
    yarn build

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
