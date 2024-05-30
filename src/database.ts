const mysql = require('mysql2/promise');

import keys from './keys';

const pool = mysql.createPool(keys.database);


async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión exitosa');
    connection.release();
  } catch (err) {
    console.error('Error en la conexión:', err);
  }
}

testConnection();

export default pool;

