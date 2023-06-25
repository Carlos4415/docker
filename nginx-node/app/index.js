const express = require('express')
const app = express()
const port = 5000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query(`INSERT INTO people(name) values ('Carlos')`)

connection.query('SELECT name FROM people', (err, results) => {
  if (err) {
    throw err;
  }
  const names = results.map((row) => row.name);

  const response = `<h1>Full Cycle Rocks!</h1>\n\n<ul>${names
    .map((name) => `<li>${name}</li>`)
    .join('\n')}</ul>`;
  
  app.get('/', (req, res) => { 
    res.send(response) 
  })
});

connection.end()

app.listen(port, ()=> {
  console.log('Servidor rodando na porta ' + port)
})

