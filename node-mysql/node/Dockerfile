# Usa a imagem oficial do Node.js na versão 21.2.0 como base.
FROM node:21.2.0

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /usr/src/app

# Adiciona o repositório de segurança Debian e instala o utilitário wget.
RUN echo "deb http://security.debian.org/debian-security bullseye-security main contrib non-free" > /etc/apt/sources.list \
    && apt-get update \
    && apt-get install -y wget

# Define a versão do Dockerize a ser utilizada.
ENV DOCKERIZE_VERSION v0.7.0

# Baixa, descompacta e remove o arquivo tar do Dockerize.
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Comando que será executado quando o contêiner iniciar.
CMD /bin/sh -c "dockerize -wait tcp://db:3306 -timeout 20s docker-entrypoint.sh && node index.js"

# Expõe a porta 3000, que é a porta em que a aplicação Node.js estará escutando.
EXPOSE 3000