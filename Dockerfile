# Используйте официальный образ Node.js
FROM node:14 AS builder

WORKDIR /app

# Копирование файлов проекта в рабочую директорию
COPY . .

# Создание директории build и установка зависимостей
RUN mkdir -p build && \
    yarn install

# Сборка проекта
RUN yarn build

# Обновление списка пакетов и установка nginx-core
RUN apt-get update && \
    apt-get install -y nginx-core

# Копирование собранных файлов в директорию nginx
COPY build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
