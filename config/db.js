const config = require("../knexfile"); //ver se é necessário colocar o .js
const knex = require("knex")(config);

knex.migrate.latest([config]);
module.exports = knex;
