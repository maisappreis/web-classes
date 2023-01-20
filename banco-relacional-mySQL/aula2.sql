-- AND, OR e NOT
-- IN
-- BETWEEN
-- LIKE
-- IS NULL
-- LIMIT
-- REGEXP - SQL Regular Expressions

SELECT * FROM nome_tabela
WHERE nome_coluna1 = 1 AND nome_coluna2 = 0;

WHERE nome_coluna1 = 1 AND nome_coluna2 = 0 AND nome_coluna3 < 10; -- pode sequenciar mais de um AND.

WHERE nome_coluna1 = 1 AND NOT nome_coluna3 < 10; -- caso queira especificar um valor que NÃO quer. Pode usar o '!=' ou '<>' também.

SELECT * FROM nome_tabela
WHERE nome_coluna1 = 1 OR nome_coluna2 = 0;

-- AND Retorna TRUE se ambas as condições forem verdadeiras.
-- OR Retorna TRUE se uma das condições for verdadeira.
-- NOT Retorna TRUE se a condição seguinte for falsa.


-- IN

SELECT * FROM nome_tabela
WHERE nome_coluna IN ("Dado dentro de uma célula", "Outro dado");

-- BETWEEN

SELECT * FROM nome_tabela
WHERE nome_coluna BETWEEN 1.99 AND 3.99; -- ele inclui o 1.99 e o 3.99.

-- LIKE

SELECT * FROM nome_tabela
WHERE nome_coluna LIKE "A%"; -- vai filtar os dados da coluna que iniciam com a letra A. Pode ser "A%" ou "a%".

SELECT * FROM nome_tabela
WHERE nome_coluna LIKE "%de"; -- vai filtar os dados da coluna que finalizam com as letras "de".


'abc' LIKE 'abc'    TRUE -- NOT LIKE retorna falso quando LIKE retorna verdade, e vice-versa.
'abc' LIKE 'a%'     TRUE
'abc' LIKE '_b_'    TRUE
'abc' LIKE 'c'      FALSE

-- IS NULL

SELECT * FROM nome_tabela
WHERE nome_coluna IS NULL; -- filtra os valores nulos.

-- LIMIT

SELECT * FROM nome_tabela
LIMIT 5, 10; -- filtrou 10 linhas da tabela, a partir do ID 5. Não inclui o ID 5.


-- REGEXP - SQL Regular Expressions

SELECT * FROM nome_tabela
WHERE nome_coluna REGEXP "a"; -- filtra dados que contenham a lentra 'a'.

WHERE nome_coluna REGEXP "^a"; -- filtra dados que iniciam com a lentra 'a'.

WHERE nome_coluna REGEXP "^a|^d"; -- filtra dados que iniciam com a lentra 'a' OU que iniciam com a letra 'd'.

WHERE nome_coluna REGEXP "[ge]a"; -- filtra dados que contenham 'ga' OU 'ea'.

WHERE nome_coluna REGEXP "^[ger]a"; -- filtra dados que iniciam com 'ga' OU 'ea' OU 'ra'.