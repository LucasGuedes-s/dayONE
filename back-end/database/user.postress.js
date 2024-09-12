const { Pool } = require('pg');

// Configurar os dados de conexão ao banco
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'back-end',
  password: 'password',
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool;
