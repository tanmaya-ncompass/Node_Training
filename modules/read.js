const pool = require('../utilities/connection')

module.exports =(req, res) => {
  const id = req.query.id
  pool.query('select * from STUDENT where S_ID = ?;',[id], (err,result) => {
      
   res.json(result);
  })
};