#!/bin/bash

COMMAND=$1

while ! sh $COMMAND  > /dev/null 2>&1; do
  echo "Waiting for command $COMMAND to be successful..."
  sleep 1 # wait for 1 second before trying command again
done
echo "The $COMMAND command ran successfully!"

