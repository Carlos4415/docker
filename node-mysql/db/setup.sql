-- Criação de uma tabela chamada "people"
CREATE TABLE people (
  id INT AUTO_INCREMENT PRIMARY KEY,  -- Coluna para armazenar IDs únicos, com autoincremento
  name VARCHAR(255) NOT NULL           -- Coluna para armazenar nomes, não pode ser nula
);
