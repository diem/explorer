# See https://developers.redhat.com/blog/2021/03/04/making-environment-variables-accessible-in-front-end-containers#inject_the_environment_variables
# for details on this hack for Making environment variables accessible in front-end containers
FROM node:14
ENV JQ_VERSION=1.6
RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn install
COPY . /app
RUN yarn run -- vite build   --mode testing

FROM nginx:1.21
ENV JSFOLDER=/usr/share/nginx/html/assets/*.js
COPY ./scripts/start-nginx.sh /usr/bin/start-nginx.sh
COPY ./scripts/nginx.conf /etc/nginx/conf.d/default.conf
RUN chmod +x /usr/bin/start-nginx.sh
WORKDIR /usr/share/nginx/html
COPY --from=0 /app/dist .
ENTRYPOINT [ "start-nginx.sh" ]
