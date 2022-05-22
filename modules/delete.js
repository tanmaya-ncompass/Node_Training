const pool = require('../utilities/connection')

module.exports = (req, res) => {
  const id = req.params.id
  pool.query('delete from STUDENT where S_ID = ?;',[id], (err,result) => {
    
    if(err){throw err}
    res.json({message:"Student deleted sucessfully"});
  })
};