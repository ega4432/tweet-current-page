#!/bin/bash -eu

cd "$(dirname "$0")"

rm -rf ./dist
yarn build

cd ./dist
zip -r build.zip ./

mv ./build.zip ../
