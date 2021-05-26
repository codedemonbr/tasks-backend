const bcrypt = require("bcrypt-nodejs");

module.exports = (app) => {
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash));
        });
    };
    /**
     * 
     * @param {*} req 
     * @param {*} res
     * Metodo save usado para signup, ou seja criar um usuário no banco
     *  
     */

    const save = (req, res) => {
        obterHash(req.body.password, (hash) => {
            const password = hash;

            app.db("users")
                .insert({
                    name: req.body.name.trim(),
                    email: req.body.email.toLowerCase().trim(),
                    password,
                })
                .then((_) => res.status(204).send())
                .catch((err) => res.status(400).json(err));
        });
    };

    return { save };
};
