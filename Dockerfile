
FROM node:alpine as build
# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app

RUN npm install -g npm
RUN npm cache clean --force

COPY package.json .
RUN npm -v
RUN npm install

COPY . .
RUN npm run build --prod


FROM nginx:1.21.3-alpine

COPY --from=build /dist/apps/portfolio /usr/share/nginx/html
COPY nginx.config  /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]