const pool = require('../utilities/connection')

module.exports = (req, res) => {
  const id = req.params.id
  const S_NAME=req.body.name
  const DEPARTMENT= req.body.dept
  const CGPA = req.body.cgpa
  pool.query('update STUDENT set S_NAME = ?, DEPARTMENT = ?, CGPA = ? where S_ID = ?;',[S_NAME,DEPARTMENT,CGPA,id], (err,result) => {
   if(err){throw err}
   res.json({message:"Student updated sucessfully"});

  })
};