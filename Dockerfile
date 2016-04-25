FROM node:latest

# install an editor (so we can change code later)
RUN apt-get update
RUN apt-get install -y vim

# install react
RUN npm install --save react@0.14
RUN npm install --save react-dom@0.14

# get the code and install it
RUN git clone https://github.com/roocell/react-google-maps.git
WORKDIR /react-google-maps
RUN npm install 
WORKDIR /react-google-maps/examples/gh-pages
RUN npm install 

WORKDIR /

# create entrypoint
RUN echo "cd /react-google-maps/examples/gh-pages; npm start" > entrypoint.sh
RUN chmod 777 entrypoint.sh

# clean up apt do it's not in our published docker container
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

CMD ./entrypoint.sh

EXPOSE 8080

