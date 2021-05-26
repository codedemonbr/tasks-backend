const fs = require("fs"),
    sharp = require("sharp");

exports.compressImage = (file, size) => {
    //Pegamos o PATH antigo e fazemos o tratamento com ele, para mudar a extensão do arquivo
    const newPath = file.path.split(".")[0] + ".webp";

    return sharp(file.path) //Executamos o SHARP na imagem que queremos comprimir
        .resize(size) //Redimendionamos para o tamanho(se não receber esse parametro, não redimensiona)
        .toFormat("webp") //Forçamos a conversão esse arqivo para webp
        .webp({ quality: 80 }) //comprimimos setando a qualidade
        .toBuffer() //transfomamos esse arquivo em buffer
        .then((data) => {
            //Deletando o arquivo antigo
            //O fs.access serve para testar se o arquivo realmente existe, evitando bugs
            fs.access(file.path, (err) => {
                //Um erro significa que ao arquivo não existe, então não tentamos apagar
                if (!err) {
                    //Se não houve erros, tentamos apagar
                    fs.unlink(file.path, (err) => {
                        //Não que erros aqui parem todo o sistema, então vou imprimir o erro, sem throw
                        if (err) console.log(err);
                    });
                }
            });

            //Agora vamos armazenar esse buffer no novo caminho
            fs.writeFile(newPath, data, (err) => {
                if (err) {
                    //Já aqui um erro significa que o upload falhou, então é importante que o usuário saiba
                    throw err;
                }
            });

            //Se o código chegou até aqui, deu certo, então vamos retornar o novo caminho
            return newPath;
        });
};
