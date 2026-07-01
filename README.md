# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🐳 Docker Development (Windows)

Use the dev compose to run Astro in watch mode with file sync.

```sh
docker compose -f docker-compose.dev.yml up --build
```

Then open http://localhost:4321.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## AI Documents

AI Agent 向けの共通ドキュメントと設定は、以下に整理しています。

- `docs/`: Codex、Antigravity、Continue、Cline などで共通利用する知識。
- `.agents/skills/`: 必要な作業領域だけを参照するためのAgent向けスキルメモ。
- `.codex/`: Codex 固有の設定、行動原則、テンプレート。

AI 共通ルールは `docs/ai.md`、現在の作業状態は `docs/status.md` を参照してください。
