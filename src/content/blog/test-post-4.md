---
title: "Node.js v22への移行とESModules対応の備忘録"
pubDate: 2026-05-30
description: "Astro v6へのメジャーアップデートに伴い、Node.jsバージョンをv22に引き上げた際の移行手順と、CJSからESMへの完全移行に伴う問題と対策。"
tags: ["Node.js", "Astro", "ESM"]
---
### バージョン移行の動機
Astroの最新メジャーアップデートに伴い、動作環境のNode.jsの推奨バージョンがv22以上となりました。
ローカル開発環境およびコンテナ環境のバージョンをアップグレードするにあたって、ESM（ES Modules）周りのモジュール解決でいくつか調整が必要になったため、その対処法を記録します。

### 主な対応内容
1. `package.json` の `"type": "module"` 指定
2. CommonJS形式のライブラリのラッパー処理
3. Dockerイメージを `node:22-alpine` へ更新
