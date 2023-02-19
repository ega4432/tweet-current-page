# Tweet Current Page

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/nokopdeekeebamcndeoakihbgenjmbll?style=plastic)
![GitHub](https://img.shields.io/github/license/ega4432/tweet-current-page?style=plastic)
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

### 通常のデプロイフロー

事前に GitHub の Secret に秘匿情報を追加する必要があります。秘匿情報の生成については [こちら](https://github.com/fregante/chrome-webstore-upload/blob/main/How%20to%20generate%20Google%20API%20keys.md) を参考にしてください。

GitHub にタグをプッシュすると自動で[デプロイが走ります](https://github.com/ega4432/tweet-current-page/actions/workflows/release.yaml)。この時打ったタグが Chrome Web Store のパッケージのバージョンになります。

```shell
$ git tag -a 'v*.*.*' -m 'something'

$ git push origin v*.*.*
```

### GitHub Actions をデバッグ

GitHub Actions のワークフローをローカルでデバッグしたい場合は以下のように act を使用します。デフォルトでは `push` イベントをトリガにした場合の処理が実行されます。

```shell
$ brew install act

$ ./scripts/act.sh
```

### マニュアルデプロイ

手動でデプロイしたい場合は、以下のようにローカルに .env を準備して行います。

```shell
# 生成した秘匿情報をペーストします
$ cp .env.example .env

$ ./scripts/deploy.sh
```

[Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole) を確認して、デプロイが完了したかを確認します。

## 作者

ega4432: [GitHub](https://github.com/ega4432) / [Twitter](https://twitter.com/ega4432)

## ライセンス

MIT
