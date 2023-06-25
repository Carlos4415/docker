# Puxa a imagem Node.js do Docker Hub
FROM node:alpine

# Define o diretório de trabalho usado dentro do contêiner (usr/src/app é o padrão para aplicativos Node.js)
WORKDIR /usr/src/app

# Copia os arquivos package.json de nossa máquina para o diretório de trabalho do contêiner
COPY package*.json ./

# Executa a instalação do npm
RUN npm install

# Copia todos os arquivos no diretório da máquina local para o diretório de trabalho (incluindo node_modules)
COPY . .

# Expõe a porta 5000. 
# O aplicativo está sendo executado na porta 5000 dentro do contêiner, portanto, não podemos visualizá-lo em nosso navegador, a menos que exponhamos a porta
EXPOSE 5000

# Informa à imagem qual comando executar quando o contêiner for iniciado
CMD ["node", "index.js"]