@echo off
title Running Wow Logs Script
npm install && node ./src/generate.js \"realm\":\"Apollo\" && npm run start
pause
