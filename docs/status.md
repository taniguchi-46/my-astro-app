# プロジェクト状況

最終更新: 2026-07-02

## 概要

| 項目 | 内容 |
| --- | --- |
| プロジェクト名 | `my-astro-app` |
| 種別 | 個人サイト / ブログ / ポートフォリオ |
| フレームワーク | Astro 6 |
| 言語 | TypeScript / Astro |
| スタイル | Tailwind CSS v4 |
| コンテンツ | Astro Content Collections |
| 実行環境 | Node.js `>=22.12.0` |
| コンテナ | Docker / Docker Compose |
| 配信 | Nginx |

## 主要コマンド

| コマンド | 用途 |
| --- | --- |
| `npm run dev` | Astro 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを作成 |
| `npm run preview` | ビルド結果をローカル確認 |
| `docker compose -f docker-compose.dev.yml up --build` | Docker 開発環境を起動 |
| `docker compose up --build` | 本番相当のコンテナ構成を起動 |

## 現在の構成

```text
docs/
  ai.md
  status.md
  loop.md
  architecture.md
  conventions.md
  glossary.md

.agents/
  skills/
    skill.md

.codex/
  AGENTS.md
  templates/
    ai-project-template/

src/
  components/
  content/blog/
  layouts/
  lib/
  pages/
  styles/
```

## 完了済み


## 次にやること

- dummy / test 系の記事を実記事に差し替えるか、開発用データとして扱う方針を決める。
- `src/components/Welcome.astro` が不要であれば削除する。
- `career.astro`, `profile.astro`, `links.astro` の内容を実データに合わせて更新する。
- TOPページのメインビジュアル画像追加検討
- 外部公開

## 保留事項

- サイト名、プロフィール文、リンク集、キャリア情報の最終文言。
- 本番デプロイ先と Nginx 設定の運用方針。
- ブログ記事のタグ体系と公開日運用。
- Tailwind のデザイントークンをどこまで共通化するか。

## 関連ファイル

| ファイル | 役割 |
| --- | --- |
| `README.md` | プロジェクト概要 |
| `package.json` | npm scripts と依存関係 |
| `astro.config.mjs` | Astro / Tailwind 設定 |
| `src/content.config.ts` | Content Collections schema |
| `src/lib/blog.ts` | ブログ一覧、ページネーションの共通処理 |
| `src/layouts/Layout.astro` | 全ページ共通レイアウト |
| `src/components/Header.astro` | ヘッダーとナビゲーション |
| `src/pages/index.astro` | トップページ |
| `src/pages/blog/index.astro` | ブログ一覧 |
| `src/pages/blog/page/[page].astro` | ブログ一覧のページネーション |
| `src/pages/blog/[...slug].astro` | ブログ記事詳細 |
## 次にやること（追記）

- Nginx の `Content-Security-Policy` 追加を検討する。Google Fonts と Astro のインライン script/style への影響を確認してから実装する。
