# Usa a imagem oficial do MySQL na versão 5.7 como base.
FROM mysql:5.7

# Configuração específica do MySQL para desativar o uso nativo do AIO para InnoDB.
CMD [ "--innodb-use-native-aio=0" ]

# Copia o arquivo setup.sql para o diretório de inicialização do MySQL.
COPY setup.sql /docker-entrypoint-initdb.d/
