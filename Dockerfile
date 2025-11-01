# Node.js 20 イメージ
FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# TypeScript をコンパイル
RUN npx tsc

# Cloud Run では PORT 環境変数を利用
CMD ["node", "dist/index.js"]