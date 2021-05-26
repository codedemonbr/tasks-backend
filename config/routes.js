const multer = require("../config/multer");
/**
 *
 * @param {*} app é a aplicação em express
 * a função desse módulo é criar as rotas
 */
module.exports = (app) => {
    app.post("/signup", app.api.user.save);
    app.post("/signin", app.api.auth.signin);

    app.route("/tasks")
        .all(app.config.passport.authenticate())
        .get(app.api.task.getTasks)
        .post(app.api.task.save);

    app.route("/tasks/:id")
        .all(app.config.passport.authenticate())
        .delete(app.api.task.remove);

    app.route("/tasks/:id/toggle")
        .all(app.config.passport.authenticate())
        .put(app.api.task.toggleTask);

    app.route("/nova-imagem").get(app.api.image.render);
    app.route("/nova-imagem").post(multer.single("image"), app.api.image.write);
};
