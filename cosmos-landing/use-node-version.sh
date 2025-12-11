#!/bin/bash
# Script to automatically use the correct Node.js version for this repo
# This ensures Node.js 20.19.0 is used when working in this directory

if [ -f "$HOME/.nvm/nvm.sh" ]; then
  source "$HOME/.nvm/nvm.sh"
  if [ -f .nvmrc ]; then
    nvm use > /dev/null 2>&1
  fi
fi

# Execute the command passed as arguments
exec "$@"

