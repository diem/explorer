#!/usr/bin/env bash
set -x
export EXISTING_VARS=$(printenv | grep ^DIEMX | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,);
for file in $JSFOLDER;
do
  cat $file | envsubst $EXISTING_VARS > "${file}.tmp"
  mv "${file}.tmp" $file
done
nginx -g 'daemon off;'
