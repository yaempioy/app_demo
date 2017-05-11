FROM node:6.10.0
MAINTAINER Kitti Boonchan <kornkittig@gmail.com>

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /var/source && cp -a /tmp/node_modules /var/source

RUN cp -a /tmp/node_modules /var/source

ADD . /var/source
WORKDIR /var/source

ENV PORT=4000

EXPOSE $PORT
ENTRYPOINT ["npm", "start"]
