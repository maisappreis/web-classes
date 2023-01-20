-- Manipulando Dados.
-- Inserir linhas.
-- Criar cópia tabela de backup.
-- Alterar dado - UPDATE.
-- Deletar dado - DELETE.
-- Drop Table: remove o esquema mais todos os dados dentro.
-- Truncate Table: remove apenas os dados de dentro da tabela.
-- last_insert_id()

-- Inserir uma linha.

USE nome_banco_dados;

INSERT INTO nome_tabela
VALUES ( -- coloca os valores de todas as colunas em ordem, esquerda para direita.
    DEFAULT, -- qnd valor padrão, como ID autoincrementado.
    "Dado inserido",
    "Dado inserido"
);

-- Inserir várias linhas.

USE nome_banco_dados;

INSERT INTO nome_tabela
VALUES 
    ( DEFAULT, "Dado inserido", "Dado inserido"),
    ( DEFAULT, "Dado inserido", "Dado inserido"),
    ( DEFAULT, "Dado inserido", "Dado inserido");


-- Função 'last_insert_id()'

INSERT INTO country (country_id, country, last_update)
VALUES 
    ( DEFAULT, "Estados Unidos", "2035-0225 04:44:00");

INSERT INTO city (city_id, city, country_id, last_update)
VALUES 
    ( DEFAULT, "New York", last_insert_id(), "2035-0225 04:44:00"); -- essa função irá colocar automaticamento o 'country_id'.
-- Caso aquele país ainda não exista na tabela.


-- Criar cópia tabela de backup.

USE nome_banco_dados;

CREATE TABLE nome_tabela_backup AS
SELECT * FROM nome_tabela;


-- Alterar dado - UPDATE.

USE nome_banco_dados;

UPDATE nome_tabela
SET nome_colunaX = 19.55
WHERE nome_colunaY = 1;

-- Deletar dado - DELETE.

USE nome_banco_dados;

DELETE FROM nome_tabela
WHERE nome_coluna = 1546;
