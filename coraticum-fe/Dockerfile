FROM node:16.13.0

# first installed node_modules in cache and copy them to src folder
RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

COPY package.json .
RUN npm install -q

WORKDIR /app/frontend

# set path to run packages from node_modules
ENV NODE_PATH=/usr/src/app/node_modules/.bin


COPY . .


EXPOSE 3000