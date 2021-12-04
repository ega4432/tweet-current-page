#!/bin/sh
rm -rf ./dist
yarn build

cd ./dist
zip -r build.zip ./

mv ./build.zip ../
