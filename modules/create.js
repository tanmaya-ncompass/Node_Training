const pool = require('../utilities/connection')

module.exports = (req, res) => {
  const S_ID= req.body.id
  const S_NAME=req.body.name
  const DEPARTMENT= req.body.dept
  const CGPA = req.body.cgpa
  pool.query('insert into STUDENT values(?,?,?,?);',[S_ID,S_NAME,DEPARTMENT,CGPA], (err,result) => {
   if(err){throw err}
   res.json({message:"Student added sucessfully"});

  })
};