# Docker

O Docker é uma plataforma de código aberto que permite a criação, implantação e execução de aplicativos em contêineres. Contêineres são unidades autossuficientes que contêm tudo o que um aplicativo precisa para funcionar. O Docker facilita a portabilidade, escalabilidade e segurança dos aplicativos, além de oferecer uma interface simples e um registro de contêineres públicos.

## Principais comandos do Docker

`docker run`: Executa um contêiner a partir de uma imagem.  
Exemplo: `docker run nome_da_imagem`

`docker build`: Constrói uma imagem Docker a partir de um Dockerfile.  
Exemplo: `docker build -t nome_da_imagem .`

`docker pull`: Baixa uma imagem Docker do registro de imagens.  
Exemplo: `docker pull nome_da_imagem`

`docker push`: Envia uma imagem Docker para um registro de imagens.  
Exemplo: `docker push nome_da_imagem`

`docker ps`: Lista os contêineres em execução.  
Exemplo: `docker ps`

`docker stop`: Para a execução de um ou mais contêineres.  
Exemplo: `docker stop nome_do_contêiner`

`docker start`: Inicia a execução de um ou mais contêineres.  
Exemplo: `docker start nome_do_contêiner`

`docker restart`: Reinicia um contêiner em execução.  
Exemplo: `docker restart nome_do_contêiner`

`docker rm`: Remove um ou mais contêineres.  
Exemplo: `docker rm nome_do_contêiner`

`docker rmi`: Remove uma ou mais imagens Docker.  
Exemplo: `docker rmi nome_da_imagem`

`docker exec`: Executa um comando dentro de um contêiner em execução.  
Exemplo: `docker exec nome_do_contêiner comando`

`docker logs`: Exibe os logs de um contêiner em execução.  
Exemplo: `docker logs nome_do_contêiner`

Esses são apenas alguns dos comandos mais utilizados no Docker. Existem muitos outros comandos disponíveis, cada um com sua finalidade específica. Para obter mais informações sobre cada comando e suas opções, você pode consultar a [documentação oficial do Docker](https://docs.docker.com/).

## Principais comandos do Docker Compose

`docker-compose up`: Inicia os serviços definidos em um arquivo docker-compose.yml. Se os serviços não existirem, eles serão criados. Se já existirem, serão reiniciados.  
Exemplo: `docker-compose up`

`docker-compose down`: Para e remove os serviços definidos em um arquivo docker-compose.yml, juntamente com as redes e volumes associados.  
Exemplo: `docker-compose down`

`docker-compose build`: Constrói ou reconstrói as imagens dos serviços definidos no arquivo docker-compose.yml.  
Exemplo: `docker-compose build`

`docker-compose start`: Inicia os serviços definidos em um arquivo docker-compose.yml, sem reconstruir as imagens.  
Exemplo: `docker-compose start`

`docker-compose stop`: Para os serviços definidos em um arquivo docker-compose.yml.  
Exemplo: `docker-compose stop`

`docker-compose restart`: Reinicia os serviços definidos em um arquivo docker-compose.yml.  
Exemplo: `docker-compose restart`

`docker-compose ps`: Lista os serviços em execução definidos em um arquivo docker-compose.yml.  
Exemplo: `docker-compose ps`

`docker-compose logs`: Exibe os logs dos serviços definidos em um arquivo docker-compose.yml.  
Exemplo: `docker-compose logs`

`docker-compose exec`: Executa um comando dentro de um serviço em execução definido em um arquivo docker-compose.yml.  
Exemplo: `docker-compose exec nome_do_serviço comando`

`docker-compose rm`: Remove os contêineres associados aos serviços definidos em um arquivo docker-compose.yml.  
Exemplo: `docker-compose rm`

Esses são alguns dos comandos mais utilizados no Docker Compose. Há outros comandos e opções disponíveis para gerenciar serviços, redes e volumes definidos no arquivo docker-compose.yml. Você pode consultar a [documentação oficial do Docker Compose](https://docs.docker.com/compose/) para obter mais informações sobre esses comandos e opções.