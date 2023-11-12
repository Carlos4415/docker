// Importando o módulo Express
const express = require("express");

// Criando uma instância do aplicativo Express
const app = express();
const port = 3000;

// Definindo uma rota para a raiz do aplicativo
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// Inicialização do servidor Express
app.listen(port, () => {
  console.log('Rodando na porta ' + port);
})