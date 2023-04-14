FROM --platform=linux/amd64 node:16.14.0-alpine3.15

WORKDIR "/app"
RUN apk add --no-cache git ca-certificates

ENV go env -w GO111MODULE=on
ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64

COPY . .

RUN npm install -g npm@8.18.0
RUN npm i

EXPOSE $PORT

CMD ["node", "service"]
