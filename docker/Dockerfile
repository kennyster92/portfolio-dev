# Builds one workspace (the shell or a mini project) and serves it with nginx.
#   APP         workspace folder, e.g. apps/shell or projects/task-board
#   NGINX_CONF  shell.conf (gateway + SPA) or remote.conf (static remote)

FROM node:24-alpine AS build
RUN npm install -g pnpm@12.4.2
WORKDIR /repo

# Download dependencies from the lockfile alone so this layer survives source edits.
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

COPY . .
RUN pnpm install --offline --frozen-lockfile

ARG APP
RUN test -n "$APP" && pnpm --filter "./$APP" build

FROM nginx:1.29-alpine
ARG APP
ARG NGINX_CONF=remote.conf
COPY docker/nginx/${NGINX_CONF} /etc/nginx/conf.d/default.conf
COPY --from=build /repo/${APP}/dist /usr/share/nginx/html
