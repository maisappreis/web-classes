-- TIPOS DE JOINs
-- inner join (dados dentro da Intersecção)
-- outer join (dados fora da Intersecção)
-- left join OU left outer join (dados de fora do lado esquerdo mais dados da intersecção)
-- right join OU right outer join (dados de fora do lado direito mais dados da intersecção)
-- full join (que seria juntar tudo, o My SQL não suporta esse comando, mas outros bancos sim)


-- nome tabela (estado) mais aplelido (e)

select * from estados e, cidades c
where e.id = c.estado_id;

select e.nome, c.nome, regiao from estados e, cidades c
where e.id = c.estado_id;

select 
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
from estados e, cidades c
where e.id = c.estado_id;

-- Usando 'inner join'

select
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id