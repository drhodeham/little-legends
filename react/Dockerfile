# base image
FROM node:9.6

COPY . /app
WORKDIR /app

ENV PATH //app/node_modules/.bin:$PATH

RUN npm install --silent

CMD ["npm", "start"]