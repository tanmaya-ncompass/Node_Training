const res = require("express/lib/response");

const errorHandler = (err,req,res,next) =>{
const statusCode = err.status? err.status :500;
res.status(statusCode);

res.json({
    success: false,
    message: err.message,
});
};

module.exports={
    errorHandler,
}