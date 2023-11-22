// Importa o módulo express para criar uma aplicação web.
const express = require("express");

// Cria uma instância do aplicativo express.
const app = express();

// Define a porta na qual o servidor escutará as conexões.
const port = 3000;

// Define uma rota para a raiz ("/") que responde com a mensagem "Hello World!!!".
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// Inicia o servidor na porta especificada.
app.listen(port, () => {
  console.log('Servidor rodando na porta ' + port);
});