FROM node:12-alpine as build

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html



