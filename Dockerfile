FROM node:14.18.3-alpine3.15

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE $PORT

CMD ["node", "service"]
