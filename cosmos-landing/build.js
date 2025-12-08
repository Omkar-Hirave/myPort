#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to install dependencies:', error);
  process.exit(1);
}

console.log('Building client...');
try {
  // Use the npm script which has access to node_modules/.bin
  execSync('npm run build:client', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

console.log('Build complete!');

