const fileHelper = require("../config/file-helper");

module.exports = (app) => {
    const render = (req, res, next) => {
        res.send(`
        <html>
            <head> 
                <title> Nova imagem </title>
            </head>
            </body>
                <!-- O enctype é de extrema importância! Não funciona sem! -->
                <form action="/nova-imagem"  method="POST" enctype="multipart/form-data">
                    <!-- O NAME do input deve ser exatamente igual ao especificado na rota -->
                    <input type="file" name="image">
                    <button type="submit"> Enviar </button>
                </form>
            </body>
        </html>
        `);
    };

    const write = (req, res, next) => {
        //Se houve sucesso no armazenamento
        if (req.file) {
            /** Vamos mandar essa imagem para compressão antes de prosseguir
             * Ela vai retornar a promise com o novo caminho com resultado, então continuamos com o then
             */
            fileHelper
                .compressImage(req.file, 100)
                .then((newPath) => {
                    //Vamos continuar normalmente, exibindo o novo caminho

                    return res.send(
                        "Upload e compressão realizados com sucesso! O novo caminho é: " +
                            newPath
                    );

                    console.log("depois do return de filHelper");
                })
                .catch((err) => console.log(err));
            
        } else {
            return res.send("Houve erro no Upload!");
        }
    };
    return { render, write };
};
