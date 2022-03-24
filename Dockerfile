FROM node:latest

RUN npm install -g pnpm

WORKDIR /shared

COPY packages/shared/package.json .

RUN pnpm install

COPY packages/shared/src ./src

COPY packages/shared/tsconfig.json .

RUN pnpm build

WORKDIR /app

COPY packages/server/package.json .

RUN pnpm install

COPY packages/server/app.js .

ENV PORT 8000

CMD PORT=${PORT} node app.js