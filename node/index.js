const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

//const sql = `INSERT INTO people(name) values ('Carlos')`
//connection.query(sql)

//app.get('/', (req, res) => {
//    res.send('<h1>Full Cycle</h1>')
//})

//const sql = `SELECT name FROM people`

connection.query('SELECT name FROM people', (err, results) => {
    if (err) {
      throw err;
    }
    const names = results.map((row) => row.name);
    const response = `<h1>Full Cycle Rocks!</h1>\n\n<ul>${names
      .map((name) => `<li>${name}</li>`)
      .join('\n')}</ul>`;
    res.send(response);
});

connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
    //console.log(`App listening at http://localhost:${port}`);
})