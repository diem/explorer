#!/bin/bash

COMMAND=$1
MAX_RETRIES="${2:-100}"
WAIT_INTERVAL="${3:-1}"

RETRIES_LEFT=$((MAX_RETRIES-1))

run_command() {
  echo "running command \`$COMMAND\` with up to $RETRIES_LEFT retries left"
  COMMAND_OUTPUT=$($COMMAND 2>&1)
  RETURN_CODE=$?
}

main () {
  run_command
  while [ $RETURN_CODE != 0 ] && [ $RETRIES_LEFT != 0 ]
  do
    RETRIES_LEFT=$((RETRIES_LEFT-1))
    sleep $WAIT_INTERVAL # wait n seconds then try again
    run_command
  done

  if [ $RETURN_CODE == 0 ]
  then
    echo "The \`$COMMAND\` command ran successfully!"
  else
    echo "The \`$COMMAND\` never succeeded after $MAX_RETRIES retries"
  fi
  echo "The output was of the most recent run was: "
  echo $COMMAND_OUTPUT
}


main
