# base image for our application
FROM node:19-alpine 

# Copy packge.json and source code into the container
COPY package.json /app/
COPY src /app/  

# set work directory to /app. All command will run in this directory
WORKDIR /app

# install dependencies in the container
RUN npm install

#set environment variable
ENV PORT=3001
ENV APP_TWO_HOST="app-two"
ENV APP_TWO_PORT=3000

# expose port 3000 for host
EXPOSE 3001

# command that executes when conteiner starts
CMD ["node", "server.js"]
