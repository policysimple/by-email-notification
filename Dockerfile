FROM node:14.18.3-alpine3.15

RUN mkdir -p /usr/src/app && apk add --no-cache bash curl
RUN apk add --no-cache gcc g++ git openssh-client

COPY ./config /root/
WORKDIR /root/.ssh/
RUN chmod 700 *

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE $PORT

CMD ["node", "service"]
