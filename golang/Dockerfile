# Dockerfile para construir uma imagem Go

# Estágio de construção
FROM golang:1.19 AS build

# Define o diretório de trabalho para /usr/src/app
WORKDIR /usr/src/app

# Copia todo o conteúdo do diretório atual para o diretório de trabalho
COPY . .

# Inicializa o módulo Go para a aplicação
RUN go mod init server

# Compila a aplicação Go e gera um executável chamado "server" no diretório /usr/src/app
RUN go build -o /usr/src/app/server

# Estágio final
FROM gcr.io/distroless/base-debian10

# Copia o executável "server" do estágio de construção para o diretório /usr/src/app/server na imagem final
COPY --from=build /usr/src/app/server /usr/src/app/server

# Expõe a porta 8080
EXPOSE 8080

# Define o comando de entrada que será executado quando o contêiner for iniciado
ENTRYPOINT [ "/usr/src/app/server" ]