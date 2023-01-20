-- Curso de MySQL da Udemy.
-- USE, SELECT, ORDEY BY, WHERE

USE nome_do_banco; -- para selecionar qual bando de dados será usado, caso se tenha mais de um.

SELECT nome_coluna FROM nome_tabela; -- selecão de colunas.
SELECT * FROM nome_tabela; -- seleciona todas as colunas.

ORDER BY nome_coluna; -- ordenação da tabela pela coluna especificada.
ORDER BY nome_coluna asc; -- ordenação ascendente.
ORDER BY nome_coluna desc; -- ordenação descendente.


SELECT nome_coluna1,nome_coluna2,nome_coluna3
FROM nome_tabela
WHERE nome_coluna2 = 100; -- filtro com WHERE.
-- OU
WHERE nome_coluna2 <= 10; -- menor ou igual que..
WHERE nome_coluna2 != 10; -- diferente de.. pode ser assim "<>"

-- Exibindo coluna adicional com cálculo. Mas essa coluna não será adicionada no banco, ela é apenas exiba com o código.

SELECT 
    custumer_id,
    amount,
    amount - (amount - 0.10) AS "10% discount" -- exibe um coluna mostrando os 'amount' com 10% de desconto. (cálculo AS nome-coluna)
FROM payment
WHERE custumer_id = 1;

SELECT * FROM address1
WHERE district = "California"; -- nome com aspas, tipo string.