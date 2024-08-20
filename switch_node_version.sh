#!/bin/bash
# Description: This script installs and switches to a specific Node.js version using nvm.
## How to use: source switch_node_version.sh

# Define the Node.js version
NODE_VERSION="19"

# Install nvm if not already installed
if ! command -v nvm &> /dev/null
then
    echo "nvm not found, installing..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    # Load nvm
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
else
    echo "nvm is already installed"
    # Ensure nvm is loaded
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Install Node.js version
echo "Installing Node.js version $NODE_VERSION..."
nvm install $NODE_VERSION

# Switch to Node.js version
echo "Switching to Node.js version $NODE_VERSION..."
nvm use $NODE_VERSION

# Set default Node.js version
nvm alias default $NODE_VERSION

# Verify Node.js version
echo "Node.js version:"
node -v