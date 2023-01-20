-- FILTRAR ou CONSULTAR.
-- * é para selecionar todas as colunas da tabela.

select * from estados

-- filtrando colunas.

select sigla, nome as 'Nome do Estado' from estados
where regiao = 'Sul'

select nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc -- ordem decrescente
-- order by populacao >> ordem crescente
