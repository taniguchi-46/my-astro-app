# アーキテクチャ

`my-astro-app` は Astro 6 を使った静的サイトです。個人サイト、ブログ、プロフィール、リンク、キャリア情報を扱います。

## 全体構成

```text
src/
  components/       再利用 UI コンポーネント
  content/blog/     Markdown ブログ記事
  layouts/          共通レイアウト
  lib/              ページ生成やデータ整形の共通処理
  pages/            ルーティング
  styles/           グローバル CSS

public/             静的アセット
docs/               プロジェクトと AI Agent 向けドキュメント
.codex/             Codex 固有の設定とテンプレート
.agents/skills/     Agent 向けの汎用作業メモ
```

## ページ構成

| パス | ファイル | 内容 |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | トップページ |
| `/blog` | `src/pages/blog/index.astro` | ブログ一覧 1 ページ目 |
| `/blog/page/[page]` | `src/pages/blog/page/[page].astro` | ブログ一覧のページネーション |
| `/blog/[...slug]` | `src/pages/blog/[...slug].astro` | ブログ記事詳細 |
| `/profile` | `src/pages/profile.astro` | プロフィール |
| `/links` | `src/pages/links.astro` | リンク集 |
| `/career` | `src/pages/career.astro` | キャリア |

## コンテンツ

ブログ記事は `src/content/blog/*.md` に配置します。`src/content.config.ts` で次の frontmatter を必須にしています。

| 項目 | 型 | 内容 |
| --- | --- | --- |
| `title` | string | 記事タイトル |
| `pubDate` | date | 公開日 |
| `description` | string | 一覧やメタ情報向けの説明 |
| `tags` | string[] | タグ |

## ブログ処理

`src/lib/blog.ts` がブログ一覧の共通処理を担当します。

- `getSortedBlogPosts`: 記事を公開日の降順で取得する。
- `BLOG_POSTS_PER_PAGE`: 1 ページあたりの記事数。現在は 15。
- `getBlogPageData`: 現在ページ、前後ページ URL、ページネーション項目を生成する。
- `getPaginationItems`: 省略記号を含むページ番号リストを生成する。

## レイアウトと UI

- `src/layouts/Layout.astro` が共通 HTML、ヘッダー、フッター、ブログ一覧表示枠を管理する。
- `src/components/Header.astro` がサイト名とナビゲーションを提供する。
- `src/components/PageHeader.astro` はページ上部の見出し表示に使う。
- `src/components/Article.astro`, `AllPosts.astro`, `Pagination.astro` はブログ一覧表示に関係する。

## スタイル

Tailwind CSS v4 を使用します。グローバル CSS は `src/styles/global.css` に配置されています。コンポーネント固有の見た目は、既存の Tailwind utility class を優先します。

## Docker / 配信

- 開発用 compose: `docker-compose.dev.yml`
- 本番相当 compose: `docker-compose.yml`
- 開発用 Dockerfile: `Dockerfile.dev`
- 本番用 Dockerfile: `Dockerfile`
- Nginx 設定: `nginx.conf`

Astro のビルド成果物は `dist/` に出力され、本番コンテナでは Nginx で配信します。
