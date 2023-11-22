# Usa a imagem oficial do Nginx na versão 1.25.3 como base.
FROM nginx:1.25.3

# Copia o conteúdo do diretório 'html' para o diretório padrão do Nginx.
COPY html /usr/share/nginx/html

# Define o ponto de entrada do contêiner, geralmente usado para execução de scripts ou configurações adicionais.
ENTRYPOINT ["/docker-entrypoint.sh"]

# Comando padrão a ser executado quando o contêiner for iniciado.
CMD ["nginx", "-g", "daemon off;"]