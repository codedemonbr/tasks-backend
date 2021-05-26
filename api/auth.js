const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

/**
 *
 * @param {*} app
 * @returns
 * aqui é feita autenticação do usuario.
 *
 */
module.exports = (app) => {
    const signin = async (req, res) => {
        /**
         * Sem email ou sem senha não rola. Já sai da função com status 400
         */
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("Dados incompletos");
        }
        /**
         * User é obtido de uma consulta no banco de dados. 
         * É o primeiro e unico email igual ao passado na requisição
         */
        const user = await app
            .db("users")
            .whereRaw("LOWER(email) = LOWER(?)", req.body.email)
            .first();
        /**se tiver user o bcrypt vai comparar a senha da requisição com a registrada no banco de dados para o user. */
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                /**caso a senha não dê match, já retorna um 401 */
                if (err || !isMatch) {
                    return res
                        .status(401)
                        .send("A senha informada é inválida!");
                }
                /** O payload é obitido dos parametros do user encontrado */
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                };
                /**E feita uma resposta em json com nome, email e o token de autenticação */
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret),
                });
            });
        } else {
            /** caso contrario o usuario é marcado como não encontrado */
            res.status(400).send("Usuário não cadastrado!");
        }
    };

    return { signin };
};
