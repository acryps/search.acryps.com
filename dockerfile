FROM node:18-slim

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/server
CMD [ "node", "dist/server/index.js" ]