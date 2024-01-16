# Используем официальный образ Node.js
FROM node:latest

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Определяем команду для запуска сервера
CMD ["npm", "start"]
