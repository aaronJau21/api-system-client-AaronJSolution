FROM node:22-alpine3.21

WORKDIR /app

COPY package*.json ./
COPY pnpm*.yaml ./
COPY prisma ./prisma

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm dlx prisma generate
RUN pnpm build


CMD [ "pnpm", "start:prod" ]