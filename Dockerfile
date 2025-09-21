# stage deps + generate
FROM node:22-alpine3.21 AS deps
WORKDIR /app
COPY package*.json pnpm*.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY prisma ./prisma
COPY . .
RUN pnpm dlx prisma generate

# stage build
FROM node:22-alpine3.21 AS build
WORKDIR /app
COPY --from=deps /app /app
RUN pnpm build

# stage prod (solo lo necesario)
FROM node:22-alpine3.21 AS prod
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app
EXPOSE 3300
CMD ["pnpm", "start:prod"]
