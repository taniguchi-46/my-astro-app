# my-astro-app

Astro 6 で構築している個人サイト / ブログ / ポートフォリオです。Markdown のブログ記事を Astro Content Collections で読み込み、静的サイトとしてビルドします。

## 技術構成

| 項目 | 内容 |
| --- | --- |
| フレームワーク | Astro 6 |
| 言語 | TypeScript / Astro |
| スタイル | Tailwind CSS v4 |
| コンテンツ | Astro Content Collections |
| 実行環境 | Node.js `>=22.12.0` |
| コンテナ | Docker / Docker Compose |
| 配信 | Nginx |

## コマンド

| Command | Action |
| --- | --- |
| `npm install` | 依存関係をインストール |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを作成 |
| `npm run preview` | ビルド結果をローカル確認 |
| `npm run astro -- --help` | Astro CLI のヘルプを表示 |

## Docker 開発

```sh
docker compose -f docker-compose.dev.yml up --build
```

起動後、`http://localhost:4321` を開きます。

## ディレクトリ構成

```text
src/
  components/       再利用 UI コンポーネント
  content/blog/     Markdown ブログ記事
  layouts/          共通レイアウト
  lib/              ブログ一覧やページネーションの共通処理
  pages/            ルーティング
  styles/           グローバル CSS

public/             静的アセット
docs/               プロジェクトと AI Agent 向けドキュメント
.agents/skills/     Agent 向けの汎用作業メモ
.codex/             Codex 固有設定とテンプレート
```

## AI Documents

AI Agent 向けの共通ドキュメントと設定を以下に整理しています。

- `docs/`: Agent 共通で参照するプロジェクト知識、作業状況、設計、規約。
- `.agents/skills/`: 今後の開発で使うスキル。
- `.codex/`: Codex 固有の行動指針とテンプレート。

作業前に `docs/status.md` と `docs/ai.md` を確認してください。
