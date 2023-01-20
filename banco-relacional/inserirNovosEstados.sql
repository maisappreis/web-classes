insert into estados (id, nome, sigla, regiao, populacao)
values (1000, "Novo", "NV", "Sul", 2.54);

insert into estados (nome, sigla, regiao, populacao)
values ("Mais Novo", "MN", "Norte", 2.51);

select * from estados;

-- O ID passar a ir do 1000 em diante, ele não preenche automaticamente o gap que ficou entre o 33 e o 1000.
-- mais de uma sentença de código executada ao mesmo tempo, precisa de ;