#!/scripts/bash -eu

cd "$(dirname "$0")/../dist"

if [[ -e ../extension.zip ]]; then
    cd ../
    rm ./extension.zip
    cd dist
fi

zip -r extension.zip ./
mv ./extension.zip ../
