# Используйте официальный образ Node.js с поддержкой нужной версии
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Копирование package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock ./

# Установка зависимостей
RUN yarn install --frozen-lockfile

# Копирование остального кода вашего приложения
COPY . .

# Сборка вашего приложения
RUN yarn build

# Открытие порта, на котором работает ваше приложение
EXPOSE 8080

# Команда для запуска вашего приложения
CMD ["yarn", "start", "--verbose"]
