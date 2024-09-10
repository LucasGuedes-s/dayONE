const pool = require('./database/user.postress');
const bcrypt = require('../back-end/utils/bcrypt.ultil')
async function CadastrarUsers() {
    try{
        const senha = bcrypt.hash('senha123')
        await pool.query(`INSERT INTO usuario (
            email, 
            nome, 
            senha, 
            data_nascimento, 
            data_entrada, 
            data_saida, 
            status
        ) VALUES (
            'usuariopadrao@gmail.com',        
            'Usuario teste',            
            '${senha}',                   
            '2003-08-29',                 
            DEFAULT,                     
            NULL,                         
            TRUE                     
        ); `);
    } catch{
        console.log('Usuário: usuariopadrao@gmail.com - já cadastrado')
    }

}
module.exports = {
    CadastrarUsers,
}