
exports.up = function(knex, Promise) {
    return knex.schema.createTable("articles", table => {
        table.increments("id").primary();
        table.string("name").notNull();
        table.string("description", 1000).notNull(); // máximo 1000 caracteres permitidos. O padrão é, qnd não especificado, 255 caracteres.
        table.string("imageUrl", 1000);
        table.binary("content").notNull(); // esse é um campo binário, seria o BLOB (Binary Large Object).
        table.integer("userId").references("id").inTable("users").notNull();
        table.integer("categoryId").references("id").inTable("categories").notNull();
    })  
};

// Blobs geralmente são objetos de imagem, áudio ou outro objetos multimedia, apesar de algumas vezes código binário executável ser armazenado como um blob.

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("articles");
};
