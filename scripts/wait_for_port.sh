#!/bin/bash

PORT=$1

while ! nc -z localhost $PORT; do
  echo "Waiting for port $PORT to be reserved..."
  sleep 1 # wait for 1 second before checking again
done
echo "Port $PORT has been reserved!"
