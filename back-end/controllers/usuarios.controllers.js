const bcrypt = require('../utils/bcrypt.ultil');
const pool = require('../database/user.postress'); // O arquivo onde configurou a conexão

async function loginUser(req, res, next){
    try {
        const email = req.body.usuario.email
        const user = await pool.query(`SELECT * FROM usuario WHERE email = '${email}'`);
        usuario = user.rows

        if(!user){
            console.error(`Usuário ou senha incorretos`);
        }
        const validar_senha = bcrypt.compare(req.body.usuario.senha, user.rows[0].senha);

        if(validar_senha){
            res.setHeader('Authorization', `Bearer token`);
            res.status(200).json({ 
                usuario: {
                  usuario
                }
            });
            next()
        }
        else{
            res.status(404).json('Usuário ou senha incorretos');
        }
    } catch (err) {
        console.log(err)
        console.error(`Erro ao realizar login do paciente`);
    }
}
async function getUser(req, res, next){
  try {
      const email = req.body.usuario.email

      const user = await pool.query(`SELECT * FROM usuario WHERE email = '${email}'`);
      usuario = user.rows

      if(!user){
          console.error(`Usuário não encontrado`);
      }
      else{
          res.status(200).json({ 
              usuario: {
                usuario
              }
          });
          next()
      }
  } catch (err) {
      console.log(err)
      console.error(`Erro ao encontrar usuário`);
  }
}
async function novoUsuario(req, res, next){
    const { email, nome, data_nascimento, genero } = req.body.usuario;
    const senha = bcrypt.hash(req.body.usuario.senha)
    const status = true
    try {
      const novo_usuario = await pool.query(
        `INSERT INTO usuario (email, nome, senha, data_nascimento, gênero, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [email, nome, senha, data_nascimento, genero, status]
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
async function registro(req, res, next){
  const { email_usuario, id_dependencia, status_paciente, atividades_paciente, desafios_paciente, vicio_feedback, mensagem_usuario} = req.body.registro;
  try {
    const novo_registro = await pool.query(
      `INSERT INTO registro (email_usuario, id_dependencia, status_paciente, atividades_paciente, desafios_paciente, vicio_feedback, mensagem_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [email_usuario, id_dependencia, status_paciente, atividades_paciente, desafios_paciente, vicio_feedback, mensagem_usuario]
    );
  
    console.log(novo_registro)
    res.status(200).json({ message: 'Sucesso!'});

  } catch (err) {
    console.error(err)
    if (err.code === '23505') {  // Código de erro para chave duplicada no PostgreSQL
      res.status(400).json({ message: 'Erro desconhecido' });
    } else {
      console.error(err.message);
      res.status(500).json({ message: 'Erro ao adicionar registro de vício' });
    }
  }    
}
async function userDependencia(req, res, next){
  const { email_usuario, id_dependencia} = req.body.usuarioDependencia;
  const status_dependencia = true
  try {
    const usuarioDependencia = await pool.query(
      `INSERT INTO usuario_dependencia (email_usuario, id_dependencia, status_dependencia) VALUES ($1, $2, $3) RETURNING *`,
      [email_usuario, id_dependencia, status_dependencia]
    );

    console.log(usuarioDependencia)
    res.status(200).json({ message: 'Sucesso ao registrar dependencia do paciente!'});

  } catch (err) {
    console.error(err)
    if (err.code === '23505') {  // Código de erro para chave duplicada no PostgreSQL
      res.status(400).json({ message: 'Erro ao cadastrar, chave duplicada' });
    } else {
      console.error(err.message);
      res.status(500).json({ message: 'Erro ao adicionar registro de dependencia de usuário' });
    }
  }    
}
module.exports = { loginUser, getUser, novoUsuario, registro, userDependencia}