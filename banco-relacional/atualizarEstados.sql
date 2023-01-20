-- ATUALIZAR

update estados
set nome = 'Maranhão'
-- se tu executar apenas isso, ele vai colocar o nome de TODOS os estados como 'Maranhão.
-- por isso, SEMPRE usar o WHERE.
where sigla = 'MA'

select nome from estados where sigla = "MA"
-- select estados.nome from estados where sigla = "MA" (tmb posso usar crases em `nome`)
-- select est.nome from estados est where sigla = "MA" (tmb posso usando apelidos para o 'estados')

update estados
set nome = "Paraná", populacao = 11.32
where sigla = "PR"

select nome, populacao from estados where sigla = "PR"