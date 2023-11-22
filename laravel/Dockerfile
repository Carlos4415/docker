# Usa a imagem base PHP 7.4 para linha de comando (CLI)
FROM php:7.4-cli

# Define o diretório de trabalho dentro do contêiner
WORKDIR /var/www

# Atualiza a lista de pacotes e instala as dependências necessárias para a extensão zip
RUN apt-get update \
    && apt-get install -y libzip-dev \
    && docker-php-ext-install zip \
    # Limpa a cache do apt-get para reduzir o tamanho da imagem
    && apt-get clean \
    # Remove listas de pacotes desnecessárias
    && rm -rf /var/lib/apt/lists/*

# Copia o executável do Composer da imagem oficial do Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Cria um novo projeto Laravel utilizando o Composer
RUN composer create-project laravel/laravel laravel

# Configura o ponto de entrada do contêiner para iniciar o servidor Laravel
ENTRYPOINT [ "php", "laravel/artisan", "serve" ]

# Comando padrão quando o contêiner é iniciado
CMD [ "--host=0.0.0.0", "--port=8000" ]