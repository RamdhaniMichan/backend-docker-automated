FROM node:latest

RUN mkdir -p /usr/api

WORKDIR /usr/api

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8081

CMD [ "node", "app.js"]   