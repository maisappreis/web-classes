-- Sobre usuários, acessos e privilégios.
-- No WorkBench, na nagevação a esquerda, em 'Administration' > 'Users and Privilegies' é possível conferir usuários.

-- Consultando usuários..

USE mysql;

SELECT * FROM user;

-- OU

SELECT * FROM mysql.user;

-- Criando usuários.. isso no WorkBench.

CREATE USER maisa IDENTIFIED BY "123456780";

CREATE USER renan@localhost IDENTIFIED BY "123456780"; -- considera o endereço para poder ter acesso.

CREATE USER derek@empresa.com IDENTIFIED BY "123456780"; 

-- Deletando usuários..

DROP USER derek@empresa.com;

-- Recuperar senha de usuário..

SET PASSWORD FOR renan@localhost = "987456123";

SET PASSWORD = "456fr4fr5"; -- dessa forma, acabo trocando a minha senha, que está logada no momento.


-- Conceder permissões.. GRANT permissions..
-- Grants = Subsídios.

SHOW GRANTS FOR maisa; -- para consultar quais permissões/privilégios o usuário possui.

GRANT SELECT, INSERT, UPDATE, DELETE -- dando permissões/privilégios. Esse '*' significa 'em todas as tabelas'.
ON nome_banco.*
TO maisa;

-- Adicionando um ADMIN..

GRANT ALL -- dando todas as permissões/privilégios no banco e em todas as tabelas deste banco de dados.
ON nome_banco.*
TO maisa;

GRANT ALL 
ON *.*     -- dando TODAS as permissões/privilégios a TODOS os bancos de dados.
TO renan@localhost;


-- Remover pivilégios.. REVOKE..

REVOKE UPDATE
ON nome_banco.*
FROM maisa;



