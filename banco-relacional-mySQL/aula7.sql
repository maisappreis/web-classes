-- Data Type
-- https://dev.mysql.com/doc/refman/8.0/en/data-types.html

CREATE DATABASE nome_banco_dados; -- Criando um Database.
DELETE DATABASE nome_banco_dados; -- Deletando um Database.

-- Criando um Database

CREATE DATABASE carros;

USE carros;

CREATE TABLE marcas(
        marcas_id INT NOT NULL AUTO_INCREMENT,
        nome_marca VARCHAR(255) NOT NULL,
        PRIMARY KEY (marcas_id)
);

-- Adicionando coluna em tabela já existente.

ALTER TABLE marcas ADD origem VARCHAR(255) NOT NULL;


CREATE TABLE inventario(
        inventario_id INT NOT NULL AUTO_INCREMENT,
        modelo VARCHAR(255) NOT NULL,
        transmissao VARCHAR(255) NOT NULL,
        motor VARCHAR(255) NOT NULL,
        combustivel VARCHAR(255) NOT NULL,
        marcas_id INT NOT NULL,
        PRIMARY KEY (inventario_id),
        FOREIGN KEY (marcas_id) REFERENCES marcas(marcas_id)        
);

CREATE TABLE clientes(
        clientes_id INT NOT NULL AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        sobrenome VARCHAR(255) NOT NULL,
        endereço VARCHAR(255) NOT NULL,    
        PRIMARY KEY (clientes_id)
);

-- Inserção de dados dentro das tabelas...

INSERT INTO clientes(nome, sobrenome, endereço)
VALUES
    ("Maisa", "Preis", "Rua ABC"),
    ("Renan", "Bernhardt", "Rua QER"),
    ("Derek", "Rodrigues", "Rua XCV");



INSERT INTO marcas(nome_marca, origem)
VALUES
    ("Hunday", "Alemã"),
    ("Fiat", "Chinesa"),
    ("Honda", "Americana");



INSERT INTO inventario(modelo, transmissao, motor, combustivel, marcas_id)
VALUES
    ("TD9", "Câmbio manual", "1.0", "Gasolina", 1),
    ("GH12", "Câmbio automático", "1.3", "Alcool", 1),
    ("ER8", "Câmbio manual", "3.0", "Disel", 1);
