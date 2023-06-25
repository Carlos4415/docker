#####################################################################################################################################
# Este Dockerfile cria uma imagem Docker que contém o PHP 7.4 CLI juntamente com algumas dependências necessárias para executar o 	#
# Laravel, um framework PHP popular. 																								#  
##################################################################################################################################### 

# Define a imagem base como a imagem oficial do PHP 7.4 CLI.
FROM php:7.4-cli

# Define o diretório de trabalho dentro do contêiner Docker como /var/www
WORKDIR /var/www

#  Executa o comando apt-get update para atualizar os repositórios APT dentro do contêiner.
RUN apt-get update

# Instala a biblioteca de desenvolvimento libzip necessária para a extensão zip do PHP.
# O parâmetro -y serve para automatizar a resposta "Sim" (yes) às perguntas de confirmação durante a instalação de pacotes com o APT (Advanced Package Tool).
RUN apt-get install libzip-dev -y 

# Instala a extensão zip do PHP usando o utilitário docker-php-ext-install.
RUN docker-php-ext-install zip

# Baixa o instalador do Composer a partir do site oficial usando o comando copy() do PHP.
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" 

# Verifica a integridade do instalador do Composer usando o hash do arquivo. 
# Se o hash corresponder ao valor esperado, exibe "Instalador verificado"; caso contrário, exibe "Instalador corrompido" e exclui o arquivo composer-setup.php.
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02 ') { echo 'Instalador verificado'; } else { echo 'Instalador corrompido'; unlink('composer-setup. php'); } echo PHP_EOL;"

# Executa o instalador do Composer para instalar o Composer no contêiner.
RUN php composer-setup.php 

#  Remove o arquivo composer-setup.php após a instalação do Composer.
RUN php -r "unlink('composer-setup.php');" 

# Move o arquivo composer.phar para o diretório /usr/local/bin/ para que o Composer possa ser executado globalmente no contêiner.
RUN mv composer.phar /usr/local/bin/composer

# Cria um novo projeto Laravel chamado "laravel" usando o comando composer create-project.
RUN composer create-project laravel/laravel laravel

#  Define o ponto de entrada para o contêiner como o comando php laravel/artisan serve, que inicia o servidor web embutido do Laravel.
ENTRYPOINT [ "php", "laravel/artisan", "serve" ]

# Define os argumentos padrão para o comando de entrada, especificando o host como 0.0.0.0.
CMD [ "--host=0.0.0.0" ]

#####################################################################################################################################
# Comandos básicos  																												#  
#####################################################################################################################################
# "docker build -t carlossoares/laravel:latest ." é usado para construir uma imagem Docker a partir de um Dockerfile no diretório atual e atribuir um nome e uma tag à imagem resultante.

# "docker build": inicia o processo de construção da imagem Docker.

# "-t carlossoares/laravel:latest": especifica o nome e a tag da imagem a ser construída. Nesse caso, o nome da imagem é "carlossoares/laravel" e a tag é "latest". A opção "-t" é usada para atribuir uma tag ou rótulo à imagem.

# ".": especifica o contexto de construção para o Docker. O ponto (.) indica que o diretório atual deve ser usado como o contexto de construção. Isso significa que o Docker irá procurar pelo Dockerfile no diretório atual e considerar todos os arquivos e diretórios a partir desse ponto durante o processo de construção da imagem.

#####################################################################################################################################

# "docker run -d --name laravel -p 8000:80 carlossoares/laravel:latest" é usado para iniciar um contêiner a partir da imagem "carlossoares/laravel:latest" e atribuir um nome específico a ele ("laravel"). Além disso, ele mapeia a porta 8000 do host para a porta 80 do contêiner.

# "docker run": inicia um novo contêiner a partir de uma imagem.

# "-d": inicia o contêiner em modo "detached", ou seja, em segundo plano.

# "--name laravel": atribui o nome "laravel" ao contêiner. Isso permite que você faça referência a ele pelo nome em vez de usar o ID do contêiner.

# "-p 8000:80": mapeia a porta 8000 do host para a porta 80 do contêiner. Isso permite acessar o aplicativo Laravel em execução no contêiner por meio do host usando a porta 8000.

# "carlossoares/laravel:latest": especifica o nome e a tag da imagem a partir da qual o contêiner será iniciado.

#####################################################################################################################################