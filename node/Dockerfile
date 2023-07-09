# Dockerfile
# Este arquivo é usado para construir uma imagem Docker baseada no Node.js 15 e executar uma aplicação Node.js.

# Definir a imagem base como node:15
FROM node:15

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando a ser executado quando o contêiner for iniciado
CMD ["node", "hello-world.js"]