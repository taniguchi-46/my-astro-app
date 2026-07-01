# 実装規約

このプロジェクトの命名、構成、実装ルールです。

## 基本

- 既存の Astro コンポーネント構成を優先する。
- ページは `src/pages/` に置き、URL 構造とファイル構造を一致させる。
- 再利用する UI は `src/components/` に置く。
- データ取得やページネーションなどの共通処理は `src/lib/` に置く。
- グローバルなスタイルは `src/styles/global.css` に置く。

## 命名

| 対象 | ルール | 例 |
| --- | --- | --- |
| Astro コンポーネント | PascalCase | `PageHeader.astro` |
| ページ | URL に合わせた lowercase | `profile.astro` |
| ライブラリ関数 | camelCase | `getSortedBlogPosts` |
| 定数 | UPPER_SNAKE_CASE | `BLOG_POSTS_PER_PAGE` |
| 型 | PascalCase | `BlogPageData` |

## Astro / TypeScript

- frontmatter で import とデータ準備を行い、テンプレート側は表示に集中させる。
- 型は既存の `astro:content` 型を活用する。
- 共通処理を追加するときは、先に `src/lib/` に似た責務の関数がないか確認する。
- import パスは既存ファイルの相対 import に合わせる。

## Markdown 記事

`src/content/blog/` に記事を追加するときは、次の frontmatter を入れる。

```md
---
title: "記事タイトル"
pubDate: 2026-07-01
description: "記事の説明"
tags: ["tag"]
---
```

- `pubDate` は日付として解釈できる形式にする。
- `tags` は文字列配列にする。
- dummy / test 記事は本番公開前に扱いを決める。

## UI / CSS

- Tailwind utility class を優先する。
- 既存の色、余白、フォント指定に合わせる。
- モバイル幅で文字がボタンやカードからはみ出さないようにする。
- クリックできる要素には `aria-label` などアクセシビリティ情報を必要に応じて追加する。

## コメント

- 文字化けしたコメントは残さない。
- コードから読み取れる説明コメントは追加しない。
- 複雑な処理や意図が伝わりにくい箇所にだけ短いコメントを置く。

## 確認

- 通常の変更後は `npm run build` を確認する。
- 記事一覧やページネーションを触った場合は `/blog`, `/blog/page/2`, 記事詳細の生成を確認する。
- Docker / Nginx を触った場合は compose 起動または設定レビューを行う。
