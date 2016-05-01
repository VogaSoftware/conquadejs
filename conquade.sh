@echo off
echo Setting output/logging arguments
set DEBUG=conquade:*
echo Setting URL of view to localhost:8080
set PORT=8080
echo Actually running conquade xD
set DEBUG=conquade:* && set PORT=80 && node ./bin/www
