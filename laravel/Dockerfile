###############################################
# Dockerfile para criar uma imagem do PHP     #
# com Laravel e iniciar o servidor de         #
# desenvolvimento do Laravel.                 #
###############################################

# Estágio 1: Construir a imagem base do PHP
FROM php:7.4-cli

# Definir o diretório de trabalho para /var/www
WORKDIR /var/www

# Atualizar os pacotes e instalar a dependência libzip-dev
RUN apt-get update
RUN apt-get install libzip-dev -y

# Instalar a extensão zip do PHP
RUN docker-php-ext-install zip

# Baixar e instalar o Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Instalador verificado'; } else { echo 'Instalador corrompido'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

# Criar um projeto Laravel usando o Composer
RUN composer create-project laravel/laravel laravel

# Estágio 2: Definir o comando de entrada e argumentos padrão
ENTRYPOINT [ "php", "laravel/artisan", "serve" ]
CMD [ "--host=0.0.0.0", "--port=8000" ]