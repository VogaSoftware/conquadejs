@echo off
echo Setting output/logging arguments
set DEBUG=conquade:*
echo Setting URL of view to localhost:8080
set PORT=8080
echo Actually running conquade xD
echo Setting down in the directory you have set to be the app's maindir
cd <DIRECTORY_WHRERE_I_LIVE>
set DEBUG=conquade:* && set PORT=80 && node ./bin/www
