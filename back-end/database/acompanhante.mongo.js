const mongoose = require("mongoose");

const url = 'mongodb+srv://samuel13tv:Sam45678.@cluster0.ds6vg.mongodb.net/acompanhantes';

mongoose.connect(url, {})
    .then(() => {
        console.log("Conexão com Banco de Dados MongoDB Realizada com Sucesso!");
    })
    .catch((error) => {
        console.log("Erro ao Conectar", error);
    });

module.exports = mongoose;
