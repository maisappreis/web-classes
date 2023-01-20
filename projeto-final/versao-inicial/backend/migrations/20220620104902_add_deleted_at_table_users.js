
exports.up = function(knex, Promise) {
    return knex.schema.alterTable("users", table => {
        table.timestamp("deletedAt") // 'timestamp' tem data, hora, dia, mês, ano, minuto e segundo.
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.alterTable("users", table => {
        table.dropColumn("deletedAt")
    })
};
