# Указываем базовый образ
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и yarn.lock для установки зависимостей
COPY package.json yarn.lock ./

# Устанавливаем все зависимости
RUN yarn install

# Копируем все остальные файлы проекта в рабочую директорию
COPY . .

# Строим проект
RUN yarn build

# Устанавливаем serve глобально
RUN yarn global add serve

# Указываем команду для запуска приложения через serve
CMD ["serve", "-s", "dist", "-l", "8080"]

# Открываем порт 8080 для доступа
EXPOSE 8080
