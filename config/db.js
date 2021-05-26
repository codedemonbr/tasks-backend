const config = require("../knexfile.js");//arquivo de configuração do knex
const knex = require("knex")(config);//já carrega e roda o knex

knex.migrate.latest([config]);
module.exports = knex;
