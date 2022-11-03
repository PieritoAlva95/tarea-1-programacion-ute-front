FROM node:18
WORKDIR /app
COPY package.json .
RUN yarn install
RUN npm install -g @angular/cli

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then yarn install; \
    else yarn install --only=production; \
    fi 

COPY . .
ENV PORT 4200 
EXPOSE ${PORT}