
// Método UP, fazer com que o banco de dados evolua, vá pra versões mais novas. Tipo: criar tabela, alterar uma coluna, excluir uma tabela.
// Método DOWN, para desfazer o que foi feito no método UP. 
// Se o sistema já estiver em produção, é necessário fazer as migrations sempre irem pra frente, evoluindo.

exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary(); // 'id' é auto incrementado, e é chave primária.
        table.string("name").notNull();
        table.string("email").notNull().unique();
        table.string("password").notNull();
        table.boolean("admin").notNull().defaultTo(false);
    })
};

// Fazer no DOWN sempre o contrário do UP.

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
};

// Se você estiver evoluindo o sistema, e quiser deletar uma tabela que não usa mais, então você vai:
// deletar/dropar a tabela no UP, (sempre indo para as novas versões do banco de dados)
// e recriar a tabela no DOWN. (sempre fazendo o contrario daquilo que foi feito no UP)