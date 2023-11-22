const express = require('express');
const faker = require('faker');
const mysql = require('mysql');

const app = express();
const port = process.env.APP_PORT || 3000;

// Criando um pool de conexões MySQL
const pool = mysql.createPool({
  connectionLimit: 10, // Número máximo de conexões simultâneas
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

// Rota principal
app.get('/', (req, res) => {
  // Gerando um nome fictício com a biblioteca Faker
  const name = faker.name.findName();

  // Obtendo uma conexão do pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Erro ao obter conexão:', err);
      res.status(500).send('Erro interno no servidor');
      return;
    }

    // Inserindo o nome gerado no banco de dados
    connection.query('INSERT INTO people (name) VALUES (?)', [name], (error, results) => {
      if (error) {
        console.error('Erro ao inserir registro:', error);
        res.status(500).send('Erro interno no servidor');
      } else {
        // Consultando todos os nomes na tabela people
        connection.query('SELECT name FROM people', (error, selectResults) => {
          connection.release(); // Liberando a conexão de volta ao pool

          if (error) {
            console.error('Erro ao obter registros:', error);
            res.status(500).send('Erro interno no servidor');
          } else {
            // Construindo uma lista HTML com os nomes obtidos
            const namesList = selectResults.map(el => `<li>${el.name}</li>`).join('');

            // Enviando a resposta HTML para o cliente
            res.send(`
              <h1>Full Cycle Rocks!</h1>
              <ol>${namesList}</ol>
            `);
          }
        });
      }
    });
  });
});

// Iniciando o servidor na porta especificada
app.listen(port, () => {
  console.log('Servidor rodando na porta:', port);
});