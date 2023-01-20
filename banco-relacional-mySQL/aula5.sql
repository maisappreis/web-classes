-- SQL Functions
-- GROUP BY
-- HAVING
-- DROP TABLE
-- SUBQuery
-- IN
-- ANY
-- http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/sql/sql_functions.asp.html#gsc.tab=0


-- essas colunas precisam ter valores numéricos.

SELECT 
    MAX(nome_coluna) AS Maior, -- retorna maior valor
    MIN(nome_coluna) AS Menor, -- retorna menor valor
    AVG(nome_coluna) AS "Média de Valores" -- retorna valor médio
    SUM(nome_coluna) AS "Total" -- retorna soma
    COUNT(nome_coluna) AS "Quantidade" -- retorna número de linhas
FROM nome_tabela

-- GROUP BY
-- Agrupar a somatória de compras realizadas por cada um dos clientes.

SELECT  
    c.custumer_id AS ID,
    c.firts_name AS Nome,
    c.last_name AS Sobrenome,
    SUM(amount) AS Total,
    COUNT(amount) as Compras
FROM payment p -- tabela
JOIN custumer c USING(custumer_id)
GROUP BY custumer_id
ORDER BY total DESC -- mostrará os cliente que compraram mais em $.

-- HAVING

GROUP BY custumer_id
HAVING Total >= 150 AND Compras >= 35 -- filtrou somatórias em $ iguais ou acima de $150. Aqui não seria possível usar o WHERE.
ORDER BY total DESC;                  -- e filtrou somatória em quantidade de compras igual ou acima de 35.


-- DROP TABLE
-- Em WorkBench

-- Drop Schema: deleta o banco de dados por completo.
-- Importando banco de dados: importa Schema primeiro, depois importar o Data.


-- SUBQuery

USE sakila;

SELECT *
FROM payment
WHERE amount > (
    SELECT AVG(amount)  -- aqui é uma subquery para consultar tudo acima da média gerada ali.
    FROM payment
);

SELECT *
FROM payment
WHERE amount = (
    SELECT MAX(amount) -- filtar a maior compra do cliente ID 1
    FROM payment
    WHERE custumer_id = 1;
);

-- IN
-- agrupou o número de compras realizadas por cada cliente, e filtrou os que realizaram mais de 35 compras.
-- relacionou essa tabela das compras, com o dados do cliente, como nome.

SELECT *
FROM customer
WHERE customer_id IN ( 
    SELECT customer_id
    FROM payment
    GROUP BY customer_id
    HAVING COUNT(*) > 35
)

-- ANY

SELECT *
FROM customer
WHERE customer_id = ANY ( -- seria tipo, igual a qualquer um que atenda estas condições entre parenteses.
    SELECT customer_id
    FROM payment
    GROUP BY customer_id
    HAVING COUNT(*) > 35
)

