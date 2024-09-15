const { Pool } = require('pg');

// Configurar os dados de conexão ao banco
const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'dayOne',
  password: 'password',
  port: 5432, // Porta padrão do PostgreSQL
});

const testConnection = async () => {
  try {
    // Tenta conectar ao banco de dados
    const client = await pool.connect();
    console.log('Conexão com o banco de dados postgres estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
};
// Executa o teste de conexão
testConnection();

module.exports = pool;
