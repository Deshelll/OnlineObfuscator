#!/bin/bash

# Останавливаем скрипт при возникновении ошибки
set -e

# Определите имя вашего Docker-образа
IMAGE_NAME="myapp"

echo "Building Docker image: $IMAGE_NAME"

# Сборка Docker-образа с использованием sudo
sudo docker build -t $IMAGE_NAME .

echo "Build completed successfully"
