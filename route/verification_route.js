const req = require("express/lib/request");
const {studentLogin} = require("../controller/controller");


var router = require("express").Router();

router.get('/:email_id',studentLogin);

module.exports = router;