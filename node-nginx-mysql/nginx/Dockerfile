# Use a imagem oficial do Nginx com a versão 1.25.3 como base
FROM nginx:1.25.3

# Copie o arquivo de configuração personalizado para o diretório de configuração do Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80 para permitir o acesso externo ao Nginx
EXPOSE 80

# Ponto de entrada para a execução do script de inicialização do Docker
ENTRYPOINT [ "/docker-entrypoint.sh" ]

# Comando padrão para iniciar o Nginx em modo daemon
CMD [ "nginx", "-g", "daemon off;" ]