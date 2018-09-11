FROM node:9
WORKDIR /app
COPY package-lock.json /app
COPY package.json /app
COPY . /app
COPY wait-for-it.sh .
RUN npm install
CMD node app.js