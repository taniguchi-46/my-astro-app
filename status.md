# 作業ステータス — KAIRO'S LAB

最終更新: 2026-06-10

---

## 現在の作業

（完了するタスクを追加してください）

---

## 完了したこと

### インフラ・環境

- Docker + Nginx による自宅サーバー公開環境の構築
- Windows ローカル開発 → GitHub → サーバー反映フローの確立
- Docker 権限バグ（`permission denied`）の解消（sudoなし運用）
- 本番デプロイ設定の不整合解消（Astro SSG + Nginx 静的配信コンテナの1つに統合）

### 共通レイアウト・ナビゲーション

- `src/layouts/Layout.astro`: 全ページ共通土台。Tailwind v4 インポート済み。Google Fonts（Noto Sans JP / Fira Code）読み込み済み。
- `src/components/Header.astro`: 赤ドットロゴ + 3本線ハンバーガーメニュー（クリックでクロス変形）+ 4分割ブロックナビ（TOPは `/` 、BLOGは `/blog` への修正完了）
- `src/components/Footer.astro`: 「Gasshin Shoutan — 臥薪嘗胆」右下ミニマル配置
- `src/components/Article.astro`: ブログ記事カード（3px 枠グリッド・ホバーで左端赤線出現）
- `src/components/Loader.astro`: ローディング画面コンポーネント（実装済み）

### ページ

- `src/pages/index.astro`: TOPページ（最新記事を動的に最大2件表示し、3件以上ある場合に「VIEW ARCHIVES」ボタンを表示するよう改修）
- `src/pages/blog/index.astro`: BLOG アーカイブ一覧ページ（Content CollectionsのContent Layer APIから全記事を動的取得して降順表示）
- `src/pages/blog/[...slug].astro`: ブログ個別詳細ページ（Markdownレンダリングとインダストリアルスタイルでの表示）
- `src/pages/profile.astro`: PROFILE ページ（コンテンツ実装済み）
- `src/pages/links.astro`: LINKS ページ（コンテンツ実装済み）

### ブログ機能・データ

- `src/content.config.ts`: Content Layer API (`glob` loader) の設定適用、`pubDate` の型安全なパース
- `src/content/blog/first-post.md`: フロントマターの YAML フォーマット修正
- `src/content/blog/test-post-2.md` / `test-post-3.md`: テスト用ダミー記事を2本作成

### AI ドキュメント

- `ai.md`: AI 引き継ぎ用指示書（プロジェクト概要・技術スタック・デザインルール・作業ルール）
- `status.md`: 本ファイル。作業状況トラッカー。

---

## 次にやること

- [ ] TOPページのメインビジュアル画像追加検討
- [ ] 開発サーバーでの動作確認および静的ビルドテスト (`npm run build`)
- [ ] タグで検索できる機能を追加
- [ ] ブログ記事のidが一元管理。ALL POSTS、NEW POSTSの表示idを共通化
- [ ] SQLiteなど新しい技術スタック追加検討
- [ ] プロフィールページのブログ部分を修正
- [ ] ブログ記事が一定数以上ある時ページネーションする機能を追加

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
