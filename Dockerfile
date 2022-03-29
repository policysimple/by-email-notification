FROM --platform=linux/amd64 node:16.14.0-alpine3.15

ARG REPO_PROTOS
ARG GITHUB_TOKEN

RUN apk update upgrade
RUN mkdir -p /usr/src/app && apk add --no-cache bash curl gcc g++ git openssh-client ca-certificates && \
    git config --global url."https://${GITHUB_TOKEN}:x-oauth-basic@${REPO_PROTOS}".insteadOf "https://${REPO_PROTOS}"

WORKDIR /usr/src/app

COPY . .

RUN npm i

EXPOSE $PORT

CMD ["node", "service"]
