/**
 * Script Node.js para um aplicativo Express
 */

// Importação dos módulos
const express = require('express');
const mysql = require('mysql');

// Configuração do aplicativo Express
const app = express();
const port = 3000;

// Configuração do banco de dados MySQL
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

// Criação da conexão com o banco de dados
const connection = mysql.createConnection(config);

// Inserção de um registro no banco de dados
const sql = `INSERT INTO people(name) values ('Carlos')`;

connection.query(sql, (error, results) => {
    if (error) {
        console.error('Erro ao inserir registros:', error);
        return;
    }
});    

// Consulta para contar a quantidade de registros na tabela people
const countQuery = `SELECT COUNT(*) AS count FROM people`;

connection.query(countQuery, (error, results) => {
    if (error) {
        console.error('Erro ao contar registros:', error);
        return;
    }

    // Obtenha o resultado da consulta
    const count = results[0].count;

    // Configuração da rota principal
    app.get('/', (req, res) => {
        res.send(`<h1>Full Cycle (${count})</h1>`);
    });
});

// Inicialização do servidor Express
const server = app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
  
// Encerramento da conexão com o banco de dados quando o servidor Express for encerrado
server.on('close', () => {
    connection.end();
});