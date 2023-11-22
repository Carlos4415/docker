-- Criação da tabela 'people' com uma coluna 'id' e uma coluna 'name'
CREATE TABLE people (
  id INT AUTO_INCREMENT PRIMARY KEY,  -- Coluna para identificação única com autoincremento
  name VARCHAR(255) NOT NULL          -- Coluna para armazenar nomes, não pode ser nula
);