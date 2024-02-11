#!/bin/bash

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null
then
    echo "pnpm could not be found. Installing pnpm..."
    npm install -g pnpm
    # Alternatively, you can use a standalone installation script for pnpm
    # curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
fi

# Navigate to your project directory if the script is outside your project
# cd /path/to/your/project

echo "Installing dependencies with pnpm..."
pnpm install

echo "Dependencies installed successfully."
