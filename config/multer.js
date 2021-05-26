const multer = require("multer");

//Vamos exportar nosso módulo multer, o queal vamos executar passado as nossas configurações em um objeto
module.exports = multer({
    //como deve ser feito o armazenamento dos arquivos?
    storage: multer.diskStorage({
        //Qual deve ser o destino dele?
        destination: (req, file, cb) => {
            //setamos o destino como segundo parametro do callback
            cb(null, "./app/public/images"); //é necessário criar esse caminho antes de gravar arquivos
        },

        //e como devem se chamar?
        filename: (req, file, cb) => {
            /**
             * Setamos o nome do arquivo que vai ser salvado no segundo parametro
             * Apenas concatenei a data atual com o nome original do arquivo, que a biblioteca nos disponibiliza
             */
            cb(null, Date.now().toString() + "-" + file.originalname);
        },
    }), //fim da configuração de armazenamento

    //como esses arquivos serão filtrados, quais formatos são aceitos/esperados?
    fileFilter: (req, file, cb) => {
        /**Procurando o formato do arquivo em um array com formatos aceitos/esperados
         * A função vai testar se algum dos formatos do ARRAY é ao formato do arquivo
         */
        const isAccepted = ["image/png", "image/jpeg", "image/jpg"].find(
            (formatoAceito) => formatoAceito == file.mimetype
        );

        //O formato do arquivo bateu com algum aceito?
        if (isAccepted) {
            //Executamos o callback com o segundo argumento true (validação aceita)
            return cb(null, true);
        }

        //Se o arquivo não bateu com nenhum aceito, executamos o callback com segundo argumento false (validação não aceita)
        return cb(null, false);
    },
});
