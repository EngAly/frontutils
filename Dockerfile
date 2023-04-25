FROM node:18.10 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx
COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=node /app/dist/utils /usr/share/nginx/html
