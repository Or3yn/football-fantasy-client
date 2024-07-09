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

# Команда для запуска вашего приложения с указанием порта и хоста
# Open port, on which your app works
EXPOSE 8080

# Command to run your app specifying port and host
CMD ["yarn", "build", "&&", "yarn", "serve", "--host", "0.0.0.0", "--port", "8080"]