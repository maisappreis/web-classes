
-- Consultando as regiões e somando as populações para ter o total, e agrupando em regiões.

select
    regiao as 'Região',
    sum(populacao) as total
from estados
group by regiao
order by total desc


-- Somando todos os estados, sem filtrar por região.

select sum(populacao) as total from estados;


-- Obtendo a média de todos os estados, sem filtrar por região.

select avg(populacao) as total from estados;