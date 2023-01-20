-- JOIN: relacionando mais de uma tabela, em uma tabela apenas.
-- Apenas JOIN é subtendido como INEER JOIN.
-- RIGHT JOIN e LEFT JOIN
-- FULL OUTER JOIN
-- UNION

SELECT *
FROM tabela1
JOIN tabela2 ON tabela1.colunaX = tabela2.colunaY; 

SELECT
    tabela1.colunaX, -- filtrando colunas.
    tabela2.colunaY, 
FROM tabela1
JOIN tabela2 ON tabela1.colunaX = tabela2.colunaY; -- Unindo 2 tabelas

SELECT
    tabela1.colunaX, -- filtrando colunas.
    tabela2.colunaY, 
    tabela3.colunaZ,
FROM tabela1
JOIN tabela2
    ON tabela1.colunaX = tabela2.colunaY -- Unindo 3 tabelas
JOIN tabela3
    ON tabela1.colunaX = tabela3.colunaZ;


-- Adicionando um Alias, um apelido, abreviação.

SELECT
    t1.colunaX, -- filtrando colunas.
    t2.colunaY, 
FROM tabela1 t1
JOIN tabela2 t2 ON t1.colunaX = t2.colunaY;

-- RIGHT JOIN e LEFT JOIN

JOIN tabela2
    ON tabela1.colunaX = tabela2.colunaY -- JOIN ou INNER JOIN: intersecção. Ambos possuem dados correnpondêntes.
RIGHT JOIN tabela3
    ON tabela1.colunaX = tabela3.colunaZ -- RIGHT JOIN: direita MAIS intersecção. Mostra todos da direita, mesmo que sem dados correspondentes.
LEFT JOIN tabela4
    ON tabela1.colunaX = tabela3.colunaS -- LEFT JOIN: esquerda MAIS intersecção. Mostra todos da esquerda, mesmo que sem dados correspondentes.


-- RIGHT JOIN e LEFT JOIN + IS NULL

RIGHT JOIN tabela3
    ON tabela1.colunaX = tabela3.colunaZ -- RIGHT JOIN: direita EXCLUINDO a intersecção.
WHERE tabela3.colunaZ IS NULL
LEFT JOIN tabela4
    ON tabela1.colunaX = tabela3.colunaS -- LEFT JOIN: esquerda EXCLUINDO a intersecção.
WHERE tabela3.colunaS IS NULL

-- FULL OUTER JOIN

SELECT * FROM tabela1
FULL OUTER JOIN tabela2
    ON tabela1.colunaX = tabela2.colunaY -- Seleção total, lado direito, mais esquerdo, MAIS intersecção.

-- FULL OUTER JOIN + IS NULL

SELECT * FROM tabela1
FULL OUTER JOIN tabela2
    ON tabela1.colunaX = tabela2.colunaY -- Seleção do lado direito MAIS esquerdo, EXCLUINDO a intersecção.
WHERE tabela1.colunaX IS NULL;


-- UNION
-- número e a ordem das colunas precisam ser idênticos em todas as queries e os data types precisam ser compatíveis.
-- ele combina o resultado de execução das duas queries e então executa um SELECT DISTINCT a fim de eliminar as linhas duplicadas.

SELECT
    c.custumer_id,
    c.firts_name,
    c.last_name,
    p.amount,
    "VIP" AS Status
FROM customer c
JOIN payment p
    ON c.custumer_id = p.payment_id
    WHERE p.amount >= 10.99 -- não pode colocar o ; aqui, senão, ele não lê abaixo.

UNION -- unirá os dois filtros.

SELECT
    c.custumer_id,
    c.firts_name,
    c.last_name,
    p.amount,
    "NON VIP" AS Status
FROM customer c
JOIN payment p
    ON c.custumer_id = p.payment_id
    WHERE p.amount < 10.99;