const pool = require('../utilities/connection')
const joi = require("joi");
const { authSchema, studentSchema } = require("../models/validation");
const {CustomClass}= require("../middleware/customError");
const {compressResponse}= require("../utilities/compression");
const {genToken,verifyToken} = require("../utilities/JWTtoken");
const { header } = require('express/lib/response');


function create(req, res) {
  
  const token = req.headers.authorization.split(" ")[1]
  const verify = verifyToken(token)
  
  if (verify == false){
    res.json("Invalid Token")
    return
  }
  let {S_ID,S_NAME,DEPARTMENT,CGPA} = req.body;
  let val = studentSchema.validate(req.body)
  if(val.error){
    res.status(401).json({
        success : false,
        message : val.error.message
    })
    return
}  
pool.query('insert into STUDENT values(?,?,?,?);',[S_ID,S_NAME,DEPARTMENT,CGPA], async (err,result) =>  {
    if(err || result.length === 0){
        res.status(400).json({
            success : err ? false : true,
            message : err ? err.message : 'inserted ${result.affectedRows} records',
            data : result
        })
        return
    }

    res.setHeader('Content-Encoding','gzip');
    res.setHeader('Content-Type','application/json');
    
    let val = await compressResponse({
        "success" : true,
        "message" : 'inserted ${result.affectedRows} records',
        "data" :result
    })
  
    res.status(201).send(val)
})
};



function read (req, res,next) {

  const token = req.headers.authorization.split(" ")[1]
  const verify = verifyToken(token)
  
  if (verify == false) {
    res.json("Invalid Token")
    return
  }
  
  const id = req.params.id
  pool.query('select * from STUDENT where S_ID = ?;',[id], async(err,result) => {

    if(err || result.length === 0){
      res.status(400).json({
          success : false,
          message : err ? err.message : "no record found" ,
          data : result
      })
      next()
  }
  res.setHeader('Content-Encoding','gzip');
  res.setHeader('Content-Type','application/json');
  
  let val = await compressResponse({
      "success" : true,
      "message" : `Fetched ${result.length} records`,
      "data" :result
  })
  res.status(200).send(val)

})
};

function read_all (req, res)  {

  const token = req.headers.authorization.split(" ")[1]
  const verify = verifyToken(token)
  
  if (verify == false) {
    res.json("Invalid Token")
    return
  }

  pool.query('select * from STUDENT ;', async(err,result) => {
    if(err || result.length === 0){
      res.status(400).json({
          success : err ? false : true,
          message : err ? err.message : "no record found",
          data : result
      })
  }

  res.setHeader('Content-Encoding','gzip');
  res.setHeader('Content-Type','application/json');

  let val = await compressResponse({
      "success" : true,
      "message" : `Fetched ${result.length} records`,
      "data" :result
  })

  res.status(200).send(val)


 })
};

function update (req, res)  {

  const token = req.headers.authorization.split(" ")[1]
  const verify = verifyToken(token)
  
  if (verify == false) {
    res.json("Invalid Token")
    return
  }

  const S_ID = req.params.id
  let {S_NAME,DEPARTMENT,CGPA} = req.body;
  let val = studentSchema.validate(req.body)
  if(val.error){
    res.status(401).json({
        success : false,
        message : val.error.message
    })
    return
}  
  pool.query('update STUDENT set S_NAME = ?, DEPARTMENT = ?, CGPA = ? where S_ID = ?;',[S_NAME,DEPARTMENT,CGPA,S_ID], async (err,result) => {
    if(err || result.length === 0){
      res.status(400).json({
          success : err ? false : true,
          message : err ? err.message : `inserted ${result.affectedRows} records`,
          data : result
      })
  }
  res.setHeader('Content-Encoding','gzip');
  res.setHeader('Content-Type','application/json');

  let val = await compressResponse({
      "success" : true,
      "message" : `Updated ${result.affectedRows} records`,
      "data" :result
  })
  res.status(200).send(val)
})
};

function delete_student (req, res) {

const token = req.headers.authorization.split(" ")[1]
  const verify = verifyToken(token)
  
  if (verify == false) {
    res.json("Invalid Token")
    return
  }

  const id = req.params.id
  pool.query('delete from STUDENT where S_ID = ?;',[id], async (err,result) => {
    if(err || result.affectedRows === 0){
      res.status(400).json({
          success : err ? false : true,
          message : err ? err.message : `ID NOT FOUND records`,
          data : result
      })
  }

  res.setHeader('Content-Encoding','gzip');
  res.setHeader('Content-Type','application/json');

  let val = await compressResponse({
      "success" : true,
      "message" : `deleted ${result.affectedRows} records`,
      "data" :result
  })
  res.status(200).send(val)
})
};


function studentLogin (req, res) {
  const id = req.params.email_id
  pool.query('select * from user_verification where email_id = ?;',[id], (err,result) => {
    if(err || result.length === 0){
      res.json({
          success : err ? false : true,
          message : err ? err.message : `email ID NOT FOUND records`,
          data : result
      })
      return
    }
    const token = genToken(id)

    res.json({token});
     })
     };


module.exports = {
    create,
    read,
    read_all,
    update,
    delete_student,
    studentLogin
}