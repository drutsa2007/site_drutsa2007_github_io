FROM ubuntu

RUN set e && \
    apt update && \
    apt install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash && \
    # curl -s https://deb.nodesource.com/setup_16.x && \
    apt install -y nodejs && \
    # apt install -y npm && \ 
    cd /usr/share && \
    mkdir react

COPY . /usr/share/react

RUN set e && \
    cd /usr/share/react && \
    npm install && \
    cd /usr/share/react

EXPOSE 3006

ENTRYPOINT ["/bin/bash"]

# CMD [ "npm", "start" ]

# docker build --tag NAME:TAG .