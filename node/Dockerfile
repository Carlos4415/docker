# Usa a imagem oficial do Node.js na versão 21.2.0 como base.
FROM node:21.2.0

# Define o diretório de trabalho dentro do contêiner.
WORKDIR /usr/src/app

# Copia os arquivos de configuração necessários para o diretório de trabalho.
COPY package*.json hello-world.js ./

# Instala as dependências do Node.js usando o npm.
RUN npm install

# Expõe a porta 3000 para permitir conexões externas ao contêiner.
EXPOSE 3000

# Comando padrão a ser executado quando o contêiner for iniciado.
CMD ["node", "hello-world.js"]