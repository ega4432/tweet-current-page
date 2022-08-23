# Tweet Current Page

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/nokopdeekeebamcndeoakihbgenjmbll?style=plastic)
![GitHub](https://img.shields.io/github/license/ega4432/tweet-current-page?style=plastic)
[![ci](https://github.com/ega4432/tweet-current-page/actions/workflows/ci.yaml/badge.svg)](https://github.com/ega4432/tweet-current-page/actions/workflows/ci.yaml)
[![release](https://github.com/ega4432/tweet-current-page/actions/workflows/release.yaml/badge.svg)](https://github.com/ega4432/tweet-current-page/actions/workflows/release.yaml)

## 概要

現在表示しているサイトをツイートできるシンプルな Chrome 拡張機能です。

![demo](https://user-images.githubusercontent.com/38056766/144696879-6f4b5c68-4f00-42bb-8b9d-7437bffb8284.gif)

## インストール

Chrome web store からインストールできます。

[Tweet Current Page \- Chrome ウェブストア](https://chrome.google.com/webstore/detail/tweet-current-page/nokopdeekeebamcndeoakihbgenjmbll?hl=ja)

## 開発

```sh
# Git clone
$ git clone git@github.com:ega4432/tweet-current-page.git

# 依存パッケージのインストール
$ yarn

# ビルド
$ yarn build
```

## デプロイ

GitHub にタグをプッシュすると自動で[デプロイが走ります](https://github.com/ega4432/tweet-current-page/actions/workflows/release.yaml)。

```shell
$ git tag -a 'v*.*.*' -m 'something'

$ git push origin v*.*.*
```

[Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole) を確認して、デプロイが完了したかを確認します。

## 作者

ega4432: [GitHub](https://github.com/ega4432) / [Twitter](https://twitter.com/ega4432)

## ライセンス

MIT
