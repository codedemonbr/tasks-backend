const { authSecret } = require("../.env");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const { Strategy, ExtractJwt } = passportJwt;
/**
 * 
 * @param {*} app 
 * @returns 
 * Esse módulo é responsável pela parte de autenticação do usuário na aplicação
 * O modo de fazer isso é usando JSON web token. Mais conhecido como jwt
 */
module.exports = (app) => {
    /**
     * authSecret vem do .env é uma chave que será usada para gerar o token
     * O token terá de ser passado pelo header quando se fizer uma requisição
     */
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    };
    /**
     * Estratégia é definida usando o objeto params criado acima e o payload
     */
    const strategy = new Strategy(params, (payload, done) => {
        app.db("users")
            .where({ id: payload.id })
            .first()
            .then((user) => {
                if (user) {
                    done(null, { id: user.id, email: user.email });
                } else {
                    done(null, false);
                }
            })
            .catch((err) => done(err, false));
    });

    passport.use(strategy);

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate("jwt", { session: false }),
    };
};
