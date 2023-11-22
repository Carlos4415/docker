# Estágio de construção: Usa a imagem PHP 7.4 CLI para construir a aplicação Laravel
FROM php:7.4-cli AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /var/www

# Instalação de dependências e extensões necessárias
RUN apt-get update \
    && apt-get install -y libzip-dev \
    # Instala a extensão zip do PHP
    && docker-php-ext-install zip \
    # Limpa a cache do apt-get para reduzir o tamanho da imagem
    && rm -rf /var/lib/apt/lists/*

# Instalação do Composer e criação do projeto Laravel
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && php composer.phar create-project laravel/laravel laravel

# Estágio de produção: Usa a imagem PHP 7.4 FPM Alpine para executar a aplicação
FROM php:7.4-fpm-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /var/www

# Remove o diretório HTML padrão no caminho /var/www/html
RUN rm -rf /var/www/html

# Remove o diretório HTML padrão e copia os arquivos Laravel do estágio de construção
COPY --from=builder /var/www/laravel .

# Cria um link simbólico 'html' apontando para 'public' e ajusta o proprietário
RUN ln -s public html \
    && chown -R www-data:www-data /var/www

# Expõe a porta 9000 para o host
EXPOSE 9000

# Comando padrão ao iniciar o contêiner: Inicia o PHP-FPM
CMD ["php-fpm"]