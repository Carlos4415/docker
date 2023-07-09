###############################################
# Dockerfile para criar uma imagem do Nginx   #
# e servir um diretório HTML estático.        #
###############################################

# Estágio 1: Construir a imagem base do Nginx
#FROM nginx:1.25.0
FROM nginx:latest

# Copiar o diretório HTML para o diretório padrão do Nginx
COPY html /usr/share/nginx/html

# Definir o script de entrada do contêiner
ENTRYPOINT ["/docker-entrypoint.sh"]

# Definir o comando padrão para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]