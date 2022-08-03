#!/bin/bash -eu

cd "$(dirname "$0")"

if [ -d ./dist ]; then
    rm -rf ./dist
fi

yarn build

cd ./dist
zip -r build.zip ./

mv ./build.zip ../
