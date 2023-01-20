-- Relação UM para UM.
-- UMA cidade para UM prefeito.
-- Sempre analisar se não seria melhor estes dados estarem na mesma tabela, ou cada um com sua tabela.

create table if not exists prefeitos (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id),
    foreign key (cidade_id) references cidades (id)
);

