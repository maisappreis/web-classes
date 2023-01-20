
-- Assim funciona bem no Workbench...

select e.nome, c.nome
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;

-- Assim funciona bem aqui no VSC com esse plugin de database.

select e.nome as Empresa, c.nome as Cidade
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;

-- Outra opção.

select e.nome `Empresa`, c.nome `Cidade`
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id
and sede;