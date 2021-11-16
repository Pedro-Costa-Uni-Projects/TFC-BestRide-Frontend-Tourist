FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm i -g @ionic/cli
COPY . /app
RUN ionic build --prod
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/www/ /usr/share/nginx/html