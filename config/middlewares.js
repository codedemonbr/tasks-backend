const bodyParser = require("body-parser");
const cors = require("cors");
/**
 * 
 * @param {*} app
 * midlewares a serem aplicados
 * de maneira bem simplificada, midlewares são interceptadores de requisição;
 * aqui tem uns especiais
 * bodyParser para usarmos json e cors para deixarmos rotas disponíveis a varios clientes.
 */
module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(
        cors({
            origin: "*",
        })
    );
};
