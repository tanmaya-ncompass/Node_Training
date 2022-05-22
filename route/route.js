//module.exports = app => {

const req = require("express/lib/request");


const {
  read_all,
  delete_student, 
  read, 
  create, 
  update,
  //studentLogin,
 // test
} = require("../controller/controller");

const { authValidation, studentValidation } = require("../models/validation");

    
    var router = require("express").Router();
    //const create = require('./modules/create')
  
    // // Create a new Student
    router.post("/", create);
  
    //Retrieve all Student
    router.get("/", read_all);
    
    // Retrieve a single Student with id
    router.get("/:id",read);

   // router.get("/", require('./modules/read/query_param'));
  
    // // Update a Student with id
     router.put("/:id", update);
  
    // // Delete a Student with id
    router.delete("/:id",delete_student);

    //student log in
    //router.get('/login',authValidation,studentLogin)

   
    
   // app.use('/api/tutorials', router);
 // };
 module.exports = router