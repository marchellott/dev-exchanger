FROM node:16 as builder
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y git \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run configure
RUN npm run build
RUN npm run generate

FROM nginx:1.21.6-alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY ./docker/vhost.conf /etc/nginx/conf.d/default.conf
