@echo off
echo Setting output/logging arguments
set DEBUG=conquade:*
echo Setting URL of view to localhost:8080
set PORT=8080
echo Actually running conquade xD
echo Setting down in the directory you told me to live in...
cd <WHERE_THIS-APP_LIVES>
set DEBUG=conquade:* && set PORT=80 && node ./bin/www
