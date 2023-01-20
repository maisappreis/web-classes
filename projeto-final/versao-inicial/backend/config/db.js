const config = require("../knexfile.js");
const knex = require("knex")(config);

knex.migrate.latest([config]); // em um sistema maior, pode não ser interessante fazer esta chamada aqui.
module.exports = knex;