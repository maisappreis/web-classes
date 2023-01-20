-- DELETAR
-- SEMPRE usar o WHERE, senão vai deletar TUDO.

delete from estados
where sigla = "MN";

delete from estados
where id >= 1000;

select * from estados;