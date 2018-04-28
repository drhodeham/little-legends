# base image
FROM node:9.6-alpine

COPY . /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn run build && \
    yarn cache clean

CMD ["yarn", "start"]