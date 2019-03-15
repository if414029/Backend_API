FROM node:8-slim

WORKDIR /main

COPY . .

RUN npm install -g nodemon mocha
RUN npm install --verbose

EXPOSE 3000

RUN ["chmod", "+x", "wait-for-it.sh"]

CMD ["npm", "run", "dev"]