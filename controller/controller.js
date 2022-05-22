const pool = require('../utilities/connection')
const joi = require("joi");
const { authSchema, studentSchema } = require("../models/validation");

function create(req, res) {
  const S_ID= req.body.id
  const S_NAME=req.body.name
  const DEPARTMENT= req.body.dept
  const CGPA = req.body.cgpa

//   pool.query('insert into STUDENT values(?,?,?,?);',[S_ID,S_NAME,DEPARTMENT,CGPA], (err,result) => {
//     if(err){throw err}
//     res.json({message:"Student added sucessfully"});
 
//    })
//  };
  
  let val = studentSchema.validate(req.body)
  if(val.error){
    res.status(401).json({
        success : false,
        message : val.error.message
    })
    return
}  
con.query(`INSERT INTO STUDENT (S_ID,S_NAME,DEPARTMENT,CGPA) values (?,?,?,?)`,[S_ID,S_NAME,DEPARTMENT,CGPA],
(err,result)=> {
    if(err || result.length === 0){
        res.status(400).json({
            success : err ? false : true,
            message : err ? err.message : `inserted ${result.affectedRows} records`,
            data : result
        })
        return
    }
    res.status(201).json({
        success : true,
        "message" : `inserted ${result.affectedRows} records`,
        data:result
    })
})
}



function read (req, res) {
  const id = req.params.id
  pool.query('select * from STUDENT where S_ID = ?;',[id], (err,result) => {
      
   res.json(result);
  })
};

function read_all (req, res)  {
  pool.query('select * from STUDENT ;', (err,result) => {
   res.json(result);
  })
};

function update (req, res)  {
  const id = req.params.id
  const S_NAME=req.body.name
  const DEPARTMENT= req.body.dept
  const CGPA = req.body.cgpa
  pool.query('update STUDENT set S_NAME = ?, DEPARTMENT = ?, CGPA = ? where S_ID = ?;',[S_NAME,DEPARTMENT,CGPA,id], (err,result) => {
   if(err){throw err}
   res.json({message:"Student updated sucessfully"});

  })
};


function delete_student (req, res) {
  const id = req.params.id
  pool.query('delete from STUDENT where S_ID = ?;',[id], (err,result) => {
    
    if(err){throw err}
    res.json({message:"Student deleted sucessfully"});
  })
};


module.exports = {
    create,
    read,
    read_all,
    update,
    delete_student
}