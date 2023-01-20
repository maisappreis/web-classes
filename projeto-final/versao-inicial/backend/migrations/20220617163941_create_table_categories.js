
exports.up = function(knex, Promise) {
    return knex.schema.createTable("categories", table => {
        table.increments("id").primary();
        table.string("name").notNull();
        table.integer("parentId").references("id") // 'interget' seria número inteiro. A categoria vai ter outra categoria pai.
            .inTable("categories");                 // temos um auto-relacionamento. Uma coluna 'id' que se relaciona com a própria tabela.
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("categories");
};
