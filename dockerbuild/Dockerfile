
FROM debian:latest

MAINTAINER wzwolfx wzwolfx@gmail.com

# Replace shell with bash so we can source files
SHELL ["/bin/bash","--login","-c"]

# Set debconf to run non-interactively
RUN echo 'debconf debconf/frontend select Noninteractive' | debconf-set-selections

# Install base dependencies
RUN apt-get update && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        wget \
	nano \
	npm \
	htop \
	less \
	procps

RUN apt update -y -q 

# RUN apt update -y
# RUN apt upgrade -y
# RUN apt install git -y
# RUN apt install nano -y
# RUN apt install curl wget -y
# download and install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
RUN nvm install v18.16.0

# download source file
RUN cd /home \
    && git clone https://github.com/wzwolf/emailtemplatenodejs.git
    
# cd to file and install npm modules
RUN cd /home/email* \
    && npm i \
    && npm i nodemon jest

