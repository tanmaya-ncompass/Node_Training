const pool = require('../utilities/connection')

module.exports = (req, res) => {
  pool.query('select * from STUDENT ;', (err,result) => {
   res.json(result);
  })
};