FROM node:10.7-alpine
# FROM mhtsharma/myapp

WORKDIR /usr/src/app
COPY ./ ./

RUN apk update && apk upgrade \
    && apk add --update \
    && npm install && npm cache clean --force

EXPOSE 3000

CMD [ "npm" , "start" ]