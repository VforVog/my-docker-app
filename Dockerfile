# Base Image with specified tag version
FROM node:14-alpine

# Set the working directory insthe the container to /app
WORKDIR /app

# Copy the current directory content into the container at /app
COPY . /app

# Install any needed packages listed in package.json
RUN npm install

# Will make port 3000 available to the world outside this container
EXPOSE 3000

# Defines the environment variable
ENV NAME mydockerapp

#CMD - Command, tells Docker what command to run inside the container after it starts
# Runs the start script defined in your package.json inside /app, thats called index.js.
CMD ["npm", "start"]