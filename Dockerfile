FROM node:16.14.2-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]

# create sql server
# mvn clean install
# create docker registery
# create web app for container
# docker build -f Dockerfile -t speproject.azurecr.io/docker-react .
# docker images
# docker run -p 3000:3000 docker-react
# docker login speproject.azurecr.io  Username Password -> Access keys azure
# docker push speproject.azurecr.io/docker-react:latest
#