-- Views
-- CREATE VIEW
-- Quando se tem consultas muito usadas, com frequencia.
-- Salvar certas Queries e dar um nome, e um atalho para elas. 

-- String Functions
-- https://dev.mysql.com/doc/refman/8.0/en/string-functions.html

USE sakira;

CREATE OR REPLACE VIEW vendas_por_cliente AS -- 'CREATE VIEW' no WorkBench. 'CREATE OR REPLACE VIEW' caso precise alterá-la e salvar novamente.
SELECT  
    c.custumer_id AS ID,
    c.firts_name AS Nome,
    c.last_name AS Sobrenome,
    p.amount
FROM custumer c -- tabela
JOIN payment p
    ON c.customer_id = p.payment_id;
ORDER BY p.amount ASC

-- Ficará salvo no WorkBench à esquerda, na navegação dos Schemas, dentro do banco de dados no qual criamos a VIEW.
-- Quando quiser usar, basta dar um 'executar'.
-- Caso queira alterar essa View, pode deletar a que está salva, (pega cópia antes), altera, e salva de novo.
-- Ou usar 'CREATE OR REPLACE VIEW'.

SELECT * FROM sakira.vendas_por_cliente
WHERE amount >= 9.99; -- posso colocar filtros diretamente na minha VIEW.


-- String Functions

SELECT TRIM("Os Carros feios"); -- retira os espaços. RTRIM (espaços a direita), LTRIM(espaços a esquerda)
SELECT LOCATE("C", "Carros"); -- localiza a letra 'C' de 'carro'.
SELECT lcase("Carros"); -- lower case.
SELECT ucase("Carros"); -- upper case.
SELECT LEGTH("Carros"); -- conta letras.
SELECT REPEAT("Carros", 4); -- repetira 4x.