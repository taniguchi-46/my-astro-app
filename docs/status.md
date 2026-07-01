# プロジェクト状態

最終更新: 2026-07-01

このドキュメントは、プロジェクト固有の現在状態、完了事項、保留事項を記録します。AI 共通の行動原則は `ai.md` を参照してください。

## プロジェクト概要

| 項目 | 内容 |
|------|------|
| プロジェクト名 | my-astro-app |
| サイト種別 | 個人サイト / ポートフォリオ / ブログ |
| フレームワーク | Astro |
| スタイル | Tailwind CSS |
| 言語 | TypeScript / Astro |
| 実行環境 | Node.js `>=22.12.0` |
| コンテナ | Docker / Docker Compose |
| 配信 | Nginx |

## 主要コマンド

| コマンド | 用途 |
|----------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run preview` | ビルド結果のプレビュー |
| `docker compose -f docker-compose.dev.yml up --build` | Docker 開発環境起動 |

## 現在の構成

```text
docs/
  ai.md
  status.md
  loop.md
  architecture.md
  conventions.md
  glossary.md
  skills/
    flutter.md
    rails.md
    testing.md
    ui.md
    review.md

.codex/
  AGENTS.md
  templates/

src/
  components/
  content/
  layouts/
  pages/
  styles/
```

## 現在の作業

- [x] AI 共通ドキュメントを `docs/` に集約。
- [x] Codex 固有設定を `.codex/` に分離。
- [x] `ai.md` と `status.md` を `docs/` に移動。
- [x] README に AI ドキュメント構成を追加。
- [x] `docs/ai.md` を AI 共通ルール中心に整理。
- [x] `docs/status.md` をプロジェクト固有状態中心に整理。
- [x] `.codex/templates/ai-project-template/` に再利用可能な AI プロジェクトテンプレートを追加。

## 完了したこと

- [x] ブログ記事一覧のページネーション機能を追加。
- [x] AI 開発環境向けの基本ディレクトリ構成を追加。
- [x] `docs/skills/` にスキル別テンプレートを追加。
- [x] `.codex/AGENTS.md` に Codex 向け行動原則を追加。
- [x] 新規プロジェクト向けの `SETUP.md` と `README_AI_SECTION.md` を追加。

## 次にやること

- [ ] `docs/architecture.md` の詳細化。
- [ ] `docs/conventions.md` の詳細化。
- [ ] `docs/glossary.md` の用語追加。
- [ ] `docs/skills/*.md` の内容追加。
- [ ] 実際の画面仕様に合わせて README の初期テンプレート部分を整理。

## 保留・確認事項

- `src/components/Welcome.astro` は Astro 初期テンプレート由来の可能性があるため、使用状況を確認する。
- ブログ記事はダミーデータを含むため、公開前に実記事へ差し替える。
- デザインルールは未整理のため、`docs/conventions.md` または `docs/architecture.md` に移す。

## 関連ファイル

| ファイル | 役割 |
|----------|------|
| [`README.md`](../README.md) | プロジェクト概要 |
| [`ai.md`](./ai.md) | AI 共通ガイド |
| [`loop.md`](./loop.md) | AI 作業フロー |
| [`architecture.md`](./architecture.md) | 設計情報テンプレート |
| [`conventions.md`](./conventions.md) | 実装規約テンプレート |
| [`glossary.md`](./glossary.md) | 用語集テンプレート |
| [`../.codex/AGENTS.md`](../.codex/AGENTS.md) | Codex 固有の行動原則 |
| [`../.codex/templates/ai-project-template/SETUP.md`](../.codex/templates/ai-project-template/SETUP.md) | AI プロジェクトテンプレートの導入手順 |
| [`../package.json`](../package.json) | npm scripts と依存関係 |
| [`../astro.config.mjs`](../astro.config.mjs) | Astro / Tailwind 設定 |
| [`../docker-compose.yml`](../docker-compose.yml) | 本番用 Docker 構成 |
| [`../docker-compose.dev.yml`](../docker-compose.dev.yml) | 開発用 Docker 構成 |
| [`../nginx.conf`](../nginx.conf) | Nginx 設定 |
| [`../src/layouts/Layout.astro`](../src/layouts/Layout.astro) | 全ページ共通レイアウト |
| [`../src/components/Header.astro`](../src/components/Header.astro) | ヘッダー / ナビゲーション |
| [`../src/pages/index.astro`](../src/pages/index.astro) | トップページ |
| [`../src/pages/profile.astro`](../src/pages/profile.astro) | プロフィールページ |
| [`../src/pages/links.astro`](../src/pages/links.astro) | リンクページ |
| [`../src/pages/career.astro`](../src/pages/career.astro) | キャリアページ |
