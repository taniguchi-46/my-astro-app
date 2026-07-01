# 作業ステータス — KAIRO'S LAB

最終更新: 2026-07-01（ブログ一覧20件ページネーション調整）

---

## 現在の作業

- [ ] プロフィールページから合言葉で就活用ページに遷移

---

## 完了したこと

- [x] ブログ記事が一定数以上ある時ページネーションする機能を追加


---

## 次にやること

- [ ] タグで検索できる機能を追加
- [ ] TOPページのメインビジュアル画像追加検討
- [ ] 右のスクロールバー部分の見た目を検討。下にスクロールした時スクロールバーの背景が切り取られているように見える
- [ ] 外部公開
 
---

## 保留・要確認

- `src/components/Welcome.astro`: テンプレート残骸。削除するか確認が必要。
- メインビジュアルの画像: 「インダストリアルで抽象的な幾何学グラフィック」を検討中。具体的な素材・方針は未決定。
- ブログ記事の実際の Markdown: ダミーデータのまま。記事執筆のタイミング未定。

---

## 関連ファイル

| ファイル | 役割 |
|---|---|
| [`ai.md`](./ai.md) | AI 引き継ぎ用指示書（ルール・設計方針） |
| [`astro.config.mjs`](./astro.config.mjs) | Astro + Tailwind v4 設定（SSGモード明示） |
| [`docker-compose.yml`](./docker-compose.yml) | 本番用 Docker 構成（Nginx静的配信シングルコンテナ） |
| [`docker-compose.dev.yml`](./docker-compose.dev.yml) | 開発用 Docker 構成（ウォッチモード） |
| [`nginx.conf`](./nginx.conf) | Nginx 静的ファイル配信・最適化設定 |
| [`src/layouts/Layout.astro`](./src/layouts/Layout.astro) | 全ページ共通レイアウト |
| [`src/components/Header.astro`](./src/components/Header.astro) | ヘッダー + ナビ |
| [`src/pages/index.astro`](./src/pages/index.astro) | BLOG トップ |
| [`src/pages/profile.astro`](./src/pages/profile.astro) | PROFILE |
| [`src/pages/links.astro`](./src/pages/links.astro) | LINKS |
