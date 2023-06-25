#####################################################################################################################################
# Esse Dockerfile cria uma imagem Docker baseada no Nginx, copia os arquivos do diretório local "html" para o diretório padrão do   #
# Nginx no contêiner e define o ponto de entrada como um script personalizado.                                                      #
# Quando o contêiner é iniciado, ele executa o servidor Nginx em primeiro plano, fornecendo o conteúdo HTML e recursos estáticos    #
# copiados para o diretório do servidor.                                                                                            #
#####################################################################################################################################

# Define a imagem base a ser usada para construir uma nova imagem Docker. Nesse caso, está sendo utilizado o Nginx com a tag "1.25.0" como a imagem base.
FROM nginx:1.25.0

# Copia arquivos ou diretórios do diretório de contexto (o diretório em que o Dockerfile está localizado) para um diretório específico dentro do contêiner.
COPY html /usr/share/nginx/html

# Especifica o comando ou script que será executado como o ponto de entrada principal do contêiner Docker.
ENTRYPOINT ["/docker-entrypoint.sh"]

# Especifica o comando padrão que será executado quando o contêiner for iniciado, caso nenhum outro comando seja fornecido na linha de comando ao iniciar o contêiner.
CMD ["nginx", "-g", "daemon off;"]

#####################################################################################################################################
# Comandos básicos                                                                                                                  #
#####################################################################################################################################

# "docker run --rm -it nginx:1.25.0 sh" é usado para executar um contêiner Docker baseado na imagem "nginx:1.25.0" em modo interativo com um shell (comando "sh") dentro do contêiner.

# "docker run" é usado para criar e executar um novo contêiner a partir de uma imagem.

# "--rm" é uma opção que indica ao Docker para remover automaticamente o contêiner após sua execução. Isso é útil para limpar automaticamente os contêineres temporários após seu uso.

# "-it" é uma combinação das opções "-i" (modo interativo) e "-t" (alocação de um pseudo terminal) que permitem interagir com o contêiner em tempo real e fornecer uma interface de terminal para dentro do contêiner.

# "nginx:1.25.0" é a imagem a partir da qual o contêiner será executado. Nesse caso, é a imagem do Nginx com a tag "1.25.0".

# "sh" é o comando que será executado dentro do contêiner. Nesse caso, ele inicia um shell interativo (shell padrão do sistema operacional) dentro do contêiner.                                                                                                  

#####################################################################################################################################   

# "docker build -t carlossoares/nginx ." é usado para construir uma nova imagem Docker usando um Dockerfile presente no diretório atual. A nova imagem será marcada com o nome "carlossoares/nginx" usando a opção "-t".

# "docker build" é usado para construir uma nova imagem Docker.

# "-t carlossoares/nginx" é a opção que especifica o nome e a tag da imagem que será criada. Nesse caso, o nome da imagem será "carlossoares/nginx".

# "." é o contexto de construção, que indica ao Docker onde procurar o Dockerfile e outros arquivos necessários para a construção da imagem. Nesse caso, o Dockerfile está localizado no diretório atual.

#####################################################################################################################################

# "docker run --rm -d --name nginx -p 8080:80 carlossoares/nginx" é usado para executar um contêiner Docker baseado na imagem "carlossoares/nginx" em segundo plano (modo detached) com algumas opções adicionais.

# "docker run" é usado para criar e executar um novo contêiner a partir de uma imagem.

# -"-rm" é uma opção que indica ao Docker para remover automaticamente o contêiner após sua execução. Isso é útil para limpar automaticamente os contêineres temporários após seu uso.

# "-d" é uma opção que indica ao Docker para executar o contêiner em segundo plano, no modo detached. Isso significa que o contêiner será executado em segundo plano e o controle do terminal será retornado ao usuário.

# "--name nginx" é usado para fornecer um nome ao contêiner. Nesse caso, o nome escolhido é "nginx".

# "-p 8080:80" é usado para mapear a porta 8080 do host local para a porta 80 do contêiner. Isso permite acessar o servidor Nginx dentro do contêiner através da porta 8080 do host.

# "carlossoares/nginx" é o nome da imagem do Docker que será usada para criar o contêiner. Essa imagem específica é utilizada nesse exemplo.

#####################################################################################################################################
