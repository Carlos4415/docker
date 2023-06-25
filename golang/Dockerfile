#####################################################################################################################################
# Esse Dockerfile é usado para construir uma imagem Docker que compila um aplicativo Go e cria um contêiner mínimo contendo apenas  #  
# o aplicativo compilado. Ao iniciar o contêiner, o aplicativo Go será executado automaticamente. 									#  
#####################################################################################################################################  

# Define a imagem base como "golang:latest" e atribui o alias "builder" a essa etapa de construção. 
# Essa etapa será usada para compilar o aplicativo
FROM golang:latest as builder

# Define o diretório de trabalho dentro do contêiner como "/usr/src/app". 
# Todos os comandos subsequentes serão executados neste diretório.
WORKDIR /usr/src/app

#  Copia todos os arquivos e pastas do diretório atual (onde está localizado o Dockerfile) para o diretório de trabalho dentro do contêiner ("/usr/src/app").
COPY . .

# Executa um comando durante o processo de construção do contêiner. 
# Nesse caso, ele inicializa um módulo Go chamado "app".
RUN go mod init app

# Compila o aplicativo Go localizado no diretório de trabalho e cria um arquivo binário chamado "app" no diretório "/usr/src/app" dentro do contêiner.
# -o é a opção que indica que você deseja especificar o nome do arquivo binário de saída.
RUN go build -o /usr/src/app/app

# Define uma nova etapa de construção com uma imagem base vazia chamada "scratch". 
# Essa etapa será usada para criar uma imagem final mínima e leve que contém apenas o aplicativo compilado.
FROM scratch

# Copia o arquivo binário "app" da etapa de construção "builder" para o diretório "/usr/src/app" dentro desta nova etapa do contêiner.
COPY --from=builder /usr/src/app/app /usr/src/app/app

# Define o comando padrão a ser executado quando um contêiner é iniciado a partir desta imagem. 
# Neste caso, o comando é definido como a execução do arquivo binário "app" no diretório "/usr/src/app" dentro do contêiner.
CMD ["/usr/src/app/app"]

#####################################################################################################################################
# Comandos básicos  																												#  
#####################################################################################################################################

# "docker build -t carlossoares/golang:latest ." é usado para construir uma imagem Docker a partir de um Dockerfile no diretório atual e atribuir um nome e uma tag à imagem resultante.

# "docker build": inicia o processo de construção da imagem Docker.

# "-t carlossoares/golang:latest": especifica o nome e a tag da imagem a ser construída. Nesse caso, o nome da imagem é "carlossoares/golang" e a tag é "latest". A opção "-t" é usada para atribuir uma tag ou rótulo à imagem.

# ".": especifica o contexto de construção para o Docker. O ponto (.) indica que o diretório atual deve ser usado como o contexto de construção. Isso significa que o Docker irá procurar pelo Dockerfile no diretório atual e considerar todos os arquivos e diretórios a partir desse ponto durante o processo de construção da imagem.

#####################################################################################################################################

# "docker run carlossoares/golang:latest" é usado para iniciar um novo contêiner a partir da imagem "carlossoares/golang:latest".

#####################################################################################################################################