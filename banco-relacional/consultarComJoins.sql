-- TIPOS DE JOINs
-- inner join (dados dentro da Intersecção)
-- outer join (dados fora da Intersecção)
-- left join OU left outer join (dados de fora do lado esquerdo mais dados da intersecção)
-- right join OU right outer join (dados de fora do lado direito mais dados da intersecção)
-- full join (que seria juntar tudo, o My SQL não suporta esse comando, mas outros bancos sim)

-- Testes foram feitos dentro do Workbench.

select * from prefeitos;
select * from cidades;

select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;

-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;

select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;
