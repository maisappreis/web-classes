-- Transformou o CNPJ que era um número inteiro em um VARCHAR, ou seja, caracteres.
-- Porque como não faz sentido fazer cálculos com números como CNPJ, CPF e RG, é melhor ser uma VARCHAR.

alter table empresas modify cnpj varchar(14);

insert into empresas (nome, cnpj)
values ("Bradesco", 24562346598598), ("Vale", 74589612357846), ("Cielo", 62147853201569);

-- Comando 'desc' mostra uma tabela com os tipos e restrições dos campos das tabelas criadas.

desc empresas;

select * from empresas;
select * from cidades;

insert into empresas_unidades (empresa_id, cidade_id, sede)
values (1, 9, 1), (1, 10, 0), (2, 9, 0), (2, 10, 1);