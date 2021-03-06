//module.exports = app => {
const {errorHandler} =require("../middleware/error") 
const req = require("express/lib/request");


const {
  read_all,
  delete_student, 
  read, 
  create, 
  update,
  studentLogin,
} = require("../controller/controller");

const { authValidation, studentValidation } = require("../models/validation");
const { append } = require("express/lib/response");

    
    var router = require("express").Router();
    
    // // Create a new Student
    router.post("/",create);
  
    //Retrieve all Student
    router.get("/", read_all);
    
    // Retrieve a single Student with id
    router.get("/:id",read);

   // router.get("/", require('./modules/read/query_param'));
  
    // // Update a Student with id
     router.put("/:id", update);
  
    // // Delete a Student with id
    router.delete("/:id",delete_student);


 module.exports = router