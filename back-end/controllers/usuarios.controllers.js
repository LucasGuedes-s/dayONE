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
async function novoUsuario(req, res, next){
    const { email, nome, data_nascimento } = req.body.usuario;
    const senha = bcrypt.hash(req.body.usuario.senha)

    try {
      const novo_usuario = await pool.query(
        `INSERT INTO usuario (email, nome, senha, data_nascimento) VALUES ($1, $2, $3, $4) RETURNING *`,
        [email, nome, senha, data_nascimento]
      );
    
      res.status(201).json({ message: 'Usuário criado com sucesso', usuario: novo_usuario.rows[0] });
    } catch (err) {
      if (err.code === '23505') {  // Código de erro para chave duplicada no PostgreSQL
        res.status(400).json({ message: 'Email já está em uso.' });
      } else {
        console.error(err.message);
        res.status(500).json({ message: 'Erro ao criar o usuário' });
      }
    }    
}
module.exports = { loginUser, novoUsuario }