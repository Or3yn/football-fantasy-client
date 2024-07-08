# Используйте официальный образ Node.js
FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

RUN apt-get update && apt-get install -y nginx-core

COPY build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
