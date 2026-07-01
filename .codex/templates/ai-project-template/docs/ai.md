# AI 共通ガイド

このドキュメントは、`{{PROJECT_NAME}}` で AI Agent が作業するときの共通ルールをまとめます。

## 参照順

1. `README.md` でプロジェクト概要と実行方法を確認する。
2. `docs/status.md` で現在の状態、完了済みタスク、残タスクを確認する。
3. `docs/architecture.md` で設計とディレクトリ構成を確認する。
4. `docs/conventions.md` で命名、実装、確認方法を確認する。
5. 必要に応じて `docs/loop.md` と `docs/glossary.md` を参照する。

## 基本方針

- 既存コード、既存設計、既存の命名規則を優先する。
- 変更は依頼範囲に絞る。
- 不明点は推測で固定せず、TODO または保留事項に残す。
- 実装後は可能な範囲で確認コマンドを実行する。
- テンプレート化できる知識は `.codex/templates/` に汎用化して残す。

## ドキュメント配置

| 種類 | 配置 | 内容 |
| --- | --- | --- |
| AI 共通ルール | `docs/ai.md` | Agent 共通の作業方針 |
| 現在状況 | `docs/status.md` | 作業状況、完了事項、次タスク |
| 作業フロー | `docs/loop.md` | 調査から完了報告までの流れ |
| 設計情報 | `docs/architecture.md` | 構成、データ、外部連携 |
| 実装規約 | `docs/conventions.md` | 命名、実装、確認方法 |
| 用語集 | `docs/glossary.md` | プロジェクト内の用語 |
