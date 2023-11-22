# Estágio de construção: utiliza a imagem Golang 1.19 para compilar o código
FROM golang:1.19 AS build

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o arquivo main.go do contexto de construção para o diretório de trabalho
COPY main.go ./

# Inicializa o módulo Go e compila o código, criando o executável 'server'
RUN go mod init server \
    && go build -o /usr/src/app/server

# Estágio de produção: utiliza uma imagem mínima para reduzir o tamanho final
FROM gcr.io/distroless/base-debian10

# Define novamente o diretório de trabalho dentro do segundo estágio
WORKDIR /usr/src/app

# Copia apenas o executável compilado do estágio de construção para o diretório de trabalho
COPY --from=build /usr/src/app/server .

# Expõe a porta 8080 para o mundo externo
EXPOSE 8080

# Define o ponto de entrada para o contêiner, iniciando o servidor
ENTRYPOINT [ "./server" ]