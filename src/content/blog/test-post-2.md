---
title: "Linux Mint サーバーの Docker 権限バグ解消手順"
pubDate: 2026-05-28
description: "permission denied ログを安全に解消し、sudoなしでDocker Composeを安全に回すまでの作業ログと権限グループ設定。"
tags: ["Docker", "Linux Mint", "Infra"]
---
### 発生した現象
Docker Composeを実行した際、以下のようなエラーが出力されてコマンドが拒否されました。
`docker: permission denied while trying to connect to the Docker daemon socket`

### 原因
現在のユーザーが `docker` グループに所属していない、または設定が反映されていないためです。

### 解決手順

1. **グループの追加確認**
   ```bash
   sudo groupadd docker
   ```
   *すでにグループが存在するというメッセージが出ても問題ありません。*

2. **現在のユーザーを docker グループに登録**
   ```bash
   sudo usermod -aG docker $USER
   ```

3. **グループ設定の適用**
   通常はログアウトが必要ですが、以下のコマンドで即時適用できます。
   ```bash
   newgrp docker
   ```

この設定により、`sudo` を付けずにセキュアかつ快適にコンテナ管理が行えるようになりました。
