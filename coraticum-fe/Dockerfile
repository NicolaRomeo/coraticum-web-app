FROM node:16.13.0
WORKDIR /app/frontend

COPY package.json package-lock.json ./
COPY . ./
RUN npm install -g npm@8.1.0
RUN npm install react-scripts@5.0.1 -g

EXPOSE 3000