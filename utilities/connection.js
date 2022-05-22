const createPool = require('mysql');

const dotenv = require('dotenv');
dotenv.config();

const pool = createPool.createConnection({
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

module.exports=pool

// pool.query('select * from STUDENT;', (err,result) => {
  
//         return console.log(result);
        
// })