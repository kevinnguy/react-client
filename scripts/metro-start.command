#!/bin/bash

# Set terminal title
echo -en "\\033]0;yarn start\\a"
clear

THIS_DIR=$(cd -P "$(dirname "$(readlink "${BASH_SOURCE[0]}" || echo "${BASH_SOURCE[0]}")")" && pwd)

# shellcheck source=/dev/null
cd "$THIS_DIR"

yarn react-native start

if [[ -z "$CI" ]]; then
  echo "Process terminated. Press <enter> to close the window"
  read -r
fi
