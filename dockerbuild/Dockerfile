FROM debian:latest

MAINTAINER wzwolfx wzwolfx@gmail.com

RUN apt update -y
RUN apt upgrade -y
RUN apt install git -y
RUN apt install nano -y
RUN apt install curl wget -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
RUN git clone https://github.com/wzwolf/emailtemplatenodejs.git
RUN nvm install node
RUN apt install npm


EXPOSE 3000
EXPOSE 3001
