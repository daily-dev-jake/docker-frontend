# step 1
FROM alpine

# step 2: install a software
# step 2: install a software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.16/main/' >> /etc/apk/repositories; 
RUN echo  'http://dl-cdn.alpinelinux.org/alpine/v3.16/community' >> /etc/apk/repositories
RUN apk update
RUN apk add --update npm
WORKDIR /usr/nodeapp
COPY ./ ./  
RUN npm install
#RUN npm rebuild
# step 2.5: Configure the software
   
#step 3: Set default commands. List of command as strings aeparated by space
CMD ["npm", "start"]


# to Build 'docker build .'
# to build with custom name 'docker build -t anuflora/mymongo:latest .'
# Commads reference:https://kapeli.com/cheat_sheets/Dockerfile.docset/Contents/Resources/Documents/index

#docker run -p 80:3000  anuflora/mybackend:latest





