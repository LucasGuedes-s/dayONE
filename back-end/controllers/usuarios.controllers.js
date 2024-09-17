const bcrypt = require('../utils/bcrypt.ultil');
const pool = require('../database/user.postress'); // O arquivo onde configurou a conexão

async function loginUser(req, res) {
  try {
      const email = req.body.usuario.email;
      const user = await pool.query(`SELECT * FROM usuario WHERE email = $1`, [email]); // Use parâmetros para evitar SQL injection
      const usuario = user.rows;

      if (usuario.length === 0) { // Verifique se o usuário foi encontrado
          return res.status(404).json('Usuário ou senha incorretos');
      }
      
      // Compare a senha do banco com a enviada pelo cliente
      const validar_senha = await bcrypt.compare(req.body.usuario.senha, usuario[0].senha);

      if (validar_senha) {
          return res.status(200).json({ 
              usuario: {
                  usuario
              }
          });
      } else {
          return res.status(404).json('Usuário ou senha incorretos');
      }
  } catch (err) {
      console.error(`Erro ao realizar login do usuário:`, err);
  }
}
async function getUser(req, res, next){
  try {
      const email = req.query.email
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
      }
  } catch (err) {
      console.log(err)
      console.error(`Erro ao encontrar usuário`);
  }
}
async function getEvolucao(req, res, next){
  try {
      const email = req.query.email

      const user = await pool.query(`SELECT * FROM registro WHERE email_usuario = '${email}'`);
      evolucao = user.rows

      if(!user){
          console.error(`Nenhuma evolução`);
      }
      else{
          res.status(200).json({ 
            evolucao: evolucao
            
          });
      }
  } catch (err) {
      console.log(err)
      console.error(`Erro ao encontrar evolução deste usuário`);
  }
}
async function getDependencias(req, res, next){
  try {
      const dependencias = await pool.query(`SELECT * FROM dependencia`);
      const dependencia = dependencias.rows

      if(!dependencia){
          console.error(`Nenhuma dependencia registrada`);
      }
      else{
          res.status(200).json({ 
            dependencia: dependencia
            
          });
      }
  } catch (err) {
      console.log(err)
      console.error(`Erro`);
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
      
      res.status(200).json({ message: 'Usuário criado com sucesso', usuario: novo_usuario.rows[0] });

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
  const { email, id_dependencia, status, atividades_paciente, desafios_paciente, vicio_feedback, mensagem_usuario} = req.body.registro;

  try {
    const novo_registro = await pool.query(
      `INSERT INTO registro (email_usuario, id_dependencia, status_paciente, atividades_paciente, desafios_paciente, vicio_feedback, mensagem_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [email, id_dependencia, status, atividades_paciente, desafios_paciente, vicio_feedback, mensagem_usuario]
    );
  
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
module.exports = { loginUser, getUser, getEvolucao, novoUsuario, registro, userDependencia, getDependencias}