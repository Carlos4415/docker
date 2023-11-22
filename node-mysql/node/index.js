// Importa as bibliotecas necessárias
const express = require('express');
const mysql = require('mysql');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta em que o servidor Express irá escutar
const port = 3000;

// Configurações para a conexão ao banco de dados MySQL
const dbConfig = {
    host: 'db',          // Nome do serviço Docker para o MySQL
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

// Criação da conexão MySQL
const connection = mysql.createConnection(dbConfig);

// Query SQL para inserir um registro na tabela 'people'
const insertQuery = `INSERT INTO people(name) VALUES ('Carlos')`;

// Executa a query de inserção no banco de dados
connection.query(insertQuery, (error, results) => {
    if (error) {
        console.error('Erro ao inserir registros:', error);
        return;
    }

    // Query SQL para contar o número de registros na tabela 'people'
    const countQuery = `SELECT COUNT(*) AS count FROM people`;

    // Executa a query de contagem no banco de dados
    connection.query(countQuery, (error, results) => {
        if (error) {
            console.error('Erro ao contar registros:', error);
            return;
        }

        // Extrai o número de registros da resposta do banco de dados
        const count = results[0].count;

        // Rota principal que retorna uma resposta HTML com o número de registros
        app.get('/', (req, res) => {
            res.send(`<h1>Full Cycle (${count})</h1>`);
        });

        // Inicia o servidor Express na porta especificada
        const server = app.listen(port, () => {
            console.log('Rodando na porta ' + port);
        });

        // Gerencia o fechamento do servidor e encerra a conexão com o banco de dados
        server.on('close', () => {
            console.log('Fechando o servidor e encerrando a conexão com o banco de dados.');
            connection.end();
        });
    });
});