#!/bin/bash

set -e

IMAGE_NAME="myapp"

echo "Building Docker image: $IMAGE_NAME"

sudo docker build -t $IMAGE_NAME .

echo "Build completed successfully"
