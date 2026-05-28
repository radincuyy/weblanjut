const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    port: Number(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'per12_kampus',
    waitForConnections: true,
    connectionLimit: 10
});

async function ensureSchema() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS mahasiswa (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nim VARCHAR(20) NOT NULL UNIQUE,
            nama VARCHAR(100) NOT NULL,
            jurusan VARCHAR(100) NOT NULL,
            angkatan INT NOT NULL
        )
    `);
}

module.exports = { pool, ensureSchema };
