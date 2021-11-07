@echo off
title Running Wow Logs Script
npm install && node ./src/generate.js Speedkill && npm run start
pause
