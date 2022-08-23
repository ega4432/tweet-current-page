#!/bin/bash -eu

cd "$(dirname "$0")/.."

if [ ! -f .env ]; then
    echo ".env is not found."
    exit 1
fi

. .env

if [ ! -e extension.zip ]; then
    echo "Zipped file is not found."
    echo "Execute: ./bin/build.sh"
    exit 1
fi

echo -e "\n============================\n"
echo "EXTENSION_ID: $EXTENSION_ID"
echo "CLIENT_ID: $CLIENT_ID"
echo "CLIENT_SECRET: $CLIENT_SECRET"
echo "REFRESH_TOKEN: $REFRESH_TOKEN"
echo -e "\n============================\n"

# npx chrome-webstore-upload-cli@2 upload --source extension.zip
