# base image
FROM node:9.6

COPY react/ /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent

CMD ["npm", "start"]