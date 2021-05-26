const express = require("express");
const app = express();
const db = require("./config/db");
const consign = require("consign");

/**
 * Consign é o responsável por adicionaros módulos à execução do projeto
 */
consign()
    .include("./config/passport.js")
    .then("./config/middlewares.js")
    .then("./config/multer.js")
    .then("./config/file-helper.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app);
/**
 * configurações de acesso e escrita o database são adicionadas na aplicação aqui
 */
app.db = db;

/**
 * A porta que será disponibilizada a aplicação
 */
app.listen(3000, () => {
    // console.log("Backend executando...");
});
