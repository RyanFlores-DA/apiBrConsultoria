const Pool = require ('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sistema",
    password: "123",
    port: 5433,
});

module.exports = pool;