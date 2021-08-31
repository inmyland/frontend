FROM node:14.17.5-alpine3.14  as builder

WORKDIR /app

COPY package.json package.json

RUN yarn install --production

COPY . .

RUN yarn build

FROM nginx:1.20.1

COPY --from=builder /app/build /usr/share/nginx/html