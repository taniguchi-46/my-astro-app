# Codex Agent Guide

このファイルは、このリポジトリで Codex が作業するときの行動指針です。共通ルールは `docs/ai.md` を優先してください。

## 参照順

1. `README.md`
2. `docs/status.md`
3. `docs/ai.md`
4. `docs/architecture.md`
5. `docs/conventions.md`
6. 必要に応じて `.agents/skills/skill.md`

## 基本方針

- 既存の Astro / TypeScript / Tailwind CSS の実装に合わせる。
- 変更範囲は依頼内容に絞る。
- 関連ファイルを読んでから編集する。
- ユーザーが作った未関係の変更は戻さない。
- 不明点は推測で固定せず、必要なら `docs/status.md` の保留事項に残す。
- 実装後は可能な範囲で `npm run build` を実行する。

## 作業時の注意

- Markdown 記事を追加・変更するときは `src/content.config.ts` の schema を確認する。
- ブログ一覧やページネーションを変更するときは `src/lib/blog.ts` と関連ページを合わせて確認する。
- UI 文言やコメントに文字化けがある場合は、現在の機能に合わせて正常な日本語へ書き直す。
- テンプレート化できる知識は `.codex/templates/ai-project-template/` に汎用化して反映する。

## 完了報告

完了時は次を簡潔に報告する。

- 変更した主なファイル
- 実装内容
- 実行した確認コマンド
- 残った未確認事項や次タスク
