# AI 共通ガイド

このドキュメントは、このリポジトリで AI Agent が作業するときの共通ルールをまとめます。Codex 固有の詳細は `.codex/AGENTS.md`、現在の作業状況は `docs/status.md` を参照してください。

## 参照順

1. `README.md` でプロジェクト概要と実行方法を確認する。
2. `docs/status.md` で現在の状態、完了済みタスク、残タスクを確認する。
3. `docs/architecture.md` でページ構成、データ取得、配信構成を確認する。
4. `docs/conventions.md` で命名、実装、Markdown 記事のルールを確認する。
5. 必要に応じて `docs/loop.md` と `docs/glossary.md` を参照する。

## 基本方針

- 既存の Astro / TypeScript / Tailwind CSS の書き方を優先する。
- 変更は依頼範囲に絞り、不要なリファクタリングやファイル移動は避ける。
- ブログ記事は `src/content/blog/` の Content Collections schema に合わせる。
- UI 変更ではデスクトップとモバイルの表示崩れ、文字のはみ出し、ナビゲーションの動作を確認する。
- 判断できない仕様は推測で固定せず、TODO または保留事項として `docs/status.md` に残す。
- 実装後は可能な範囲で `npm run build` を実行し、結果を報告する。

## ドキュメント配置

| 種類 | 配置 | 内容 |
| --- | --- | --- |
| AI 共通ルール | `docs/ai.md` | Agent 共通の作業方針 |
| 現在状況 | `docs/status.md` | 作業状況、完了事項、次タスク |
| 作業フロー | `docs/loop.md` | 調査から完了報告までの流れ |
| 設計情報 | `docs/architecture.md` | Astro 構成、データ、Docker/Nginx |
| 実装規約 | `docs/conventions.md` | 命名、コンポーネント、記事、CSS |
| 用語集 | `docs/glossary.md` | プロジェクト内の用語 |
| Codex 固有設定 | `.codex/AGENTS.md` | Codex 向け行動指針 |
| 汎用スキル | `.agents/skills/skill.md` | 今後の開発で使う短い作業メモ |

## 作業時の注意

- 文字化けした既存文言を再利用しない。必要な内容は UTF-8 の日本語で書き直す。
- 既存ファイルの削除や移動は、参照元のリンクや import を確認してから行う。
- `src/components/Welcome.astro` や dummy 記事など、Astro 初期テンプレート由来の可能性があるものは、使用状況を確認してから整理する。
- テンプレート化できる知識は `.codex/templates/ai-project-template/` に汎用化して残す。
