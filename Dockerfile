FROM node:14.15.4-alpine3.10

ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm i --production

COPY .next /usr/src/app/.next
COPY next.config.js /usr/src/app/

EXPOSE 3000

CMD "npm" "start"
