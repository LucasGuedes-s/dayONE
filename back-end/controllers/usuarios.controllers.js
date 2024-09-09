const bcrypt = require('../utils/bcrypt.ultil');
const pool = require('../database/user.postress'); // O arquivo onde configurou a conexão

async function loginUser(req, res, next){
    try {
        const email = req.body.usuario.email
        const user = await pool.query(`SELECT * FROM usuario WHERE email = '${email}'`);
        console.log(user.rows)

        if(!user){
            console.error(`Usuário ou senha incorretos`);
        }
        console.log(req.body.usuario.senha, user.rows[0].senha)
        const validar_senha = bcrypt.compare(req.body.usuario.senha, user.rows[0].senha);
        if(validar_senha){
            res.status(200).json('Usuário logado com sucesso');
            next()
        }
        else{
            console.error(`Usuário ou senha incorretos`);
        }
    } catch (err) {
        console.log(err)
        console.error(`Erro ao realizar login do paciente`);
    }
}
module.exports = { loginUser }