require ('dotenv').config();
const Pool = require ('pg').Pool;

const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;
const USER_DB = process.env.USER_DB;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT;

const pool = new Pool({
    user: USER_DB,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT,
});

module.exports = pool;