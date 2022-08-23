#!/bin/bash -eu

cd "$(dirname "$0")"

if ! type act; then
    echo "\"act\" command is not found."
    echo "Please execute \"brew install act\" for installation in your terminal."
    exit 1
fi

act push \
    --eventpath .github/event.json \
    --platform ubuntu-latest=ghcr.io/catthehacker/ubuntu:js-latest \
    --workflows .github/workflows/release.yaml
