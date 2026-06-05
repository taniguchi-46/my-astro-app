# 1. 構築用（Build）ステージ
FROM node:24-alpine AS builder
WORKDIR /app

# 依存関係を先にコピーしてインストール（キャッシュを効かせるため）
COPY package*.json ./
RUN npm ci

# 残りのソースコードをコピーして本番用ビルドを実行
COPY . .
RUN npm run build

# 2. 実行用（Production）ステージ — Nginx で静的ファイルを直接配信
FROM nginx:alpine AS runner

# ビルド成果物（静的HTML/CSS/JS）を Nginx のドキュメントルートにコピー
COPY --from=builder /app/dist /usr/share/nginx/html

# カスタム Nginx 設定を適用
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]