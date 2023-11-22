# Etapa 1: Construção
FROM node:14.17.5 AS builder

# Define o diretório de trabalho para a construção
WORKDIR /usr/src/app

# Copia todos os arquivos do contexto de construção para o contêiner
COPY . .

# Instala as dependências do Node.js
RUN npm i

# Etapa 2: Imagem final
FROM node:14.17.5

# Define novamente o diretório de trabalho para a imagem final
WORKDIR /usr/src/app

# Copia os arquivos da etapa de construção para a imagem final
COPY --from=builder /usr/src/app .

# Expõe a porta 3000 para a aplicação
EXPOSE 3000

# Define o comando padrão para iniciar a aplicação
CMD [ "npm", "start" ]