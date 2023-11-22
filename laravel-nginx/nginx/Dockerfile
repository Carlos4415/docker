# Usa a imagem Nginx 1.15.0-alpine como base
FROM nginx:1.15.0-alpine

# Remove a configuração padrão do Nginx que não será utilizada
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração personalizado para o diretório de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Cria a estrutura de diretórios para o conteúdo da aplicação web
# e cria um arquivo index.php vazio
RUN mkdir -p /var/www/html \
    && touch /var/www/html/index.php