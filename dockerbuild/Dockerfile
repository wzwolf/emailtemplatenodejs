
FROM debian:latest

MAINTAINER wzwolfx wzwolfx@gmail.com

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

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
	npm 

RUN apt update -y -q 

# RUN apt update -y
# RUN apt upgrade -y
# RUN apt install git -y
# RUN apt install nano -y
# RUN apt install curl wget -y
# download and install nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# download source file
RUN cd /home \
    && git clone https://github.com/wzwolf/emailtemplatenodejs.git

EXPOSE 3000
EXPOSE 3001
