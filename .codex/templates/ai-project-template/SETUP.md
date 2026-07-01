# AI Project Template Setup

このテンプレートは、新規プロジェクトで複数の AI Agent が共通知識を再利用できるようにするための初期構成です。

## 使い方

1. この `ai-project-template/` の中身を新規プロジェクトのルートへコピーする。
2. `docs/status.md` の TODO をプロジェクト情報に合わせて埋める。
3. `docs/architecture.md` と `docs/conventions.md` に最低限の方針を記載する。
4. 利用する技術に関係する `docs/skills/*.md` だけを詳細化する。
5. README がある場合は `README_AI_SECTION.md` の内容を追記する。
6. Codex を使う場合は `.codex/AGENTS.md` をプロジェクトに合わせて確認する。

## コピー対象

```text
docs/
.codex/
README_AI_SECTION.md
```

`README_AI_SECTION.md` は README に貼り付けるための断片です。コピー後に不要であれば削除して構いません。

## 最初に埋める項目

- `docs/status.md` のプロジェクト概要。
- `docs/status.md` の主要コマンド。
- `docs/status.md` の関連ファイル。
- `docs/architecture.md` の採用アーキテクチャ。
- `docs/conventions.md` の命名規則。

## 運用ルール

- AI 共通の知識は `docs/` に置く。
- AI Agent 固有の設定は `.codex/` や `.antigravity/` などに置く。
- Agent は必要なドキュメントだけを読む。
- プロジェクト固有の状態は `docs/status.md` に集約する。
- 詳細化していない項目は TODO として残してよい。
