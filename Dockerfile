# 1. 構築用（Build）ステージ
FROM node:24-alpine AS builder
WORKDIR /app

# 依存関係を先にコピーしてインストール（キャッシュを効かせるため）
COPY package*.json ./
RUN npm ci

# 残りのソースコードをコピーして本番用ビルドを実行
COPY . .
RUN npm run build

# 2. 実行用（Production）ステージ
FROM node:24-alpine AS runner
WORKDIR /app

# 本番環境であることを明示
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

# ビルド成果物と必要なファイルをコピー
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Astroの開発サーバーではなく本番プレビューを起動
EXPOSE 4321
CMD ["node", "./dist/server/entry.mjs"]