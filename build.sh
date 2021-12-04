#!/bin/sh

cd ./dist
zip -r build.zip ./

cd ../ && mv ./dist/build.zip ./
