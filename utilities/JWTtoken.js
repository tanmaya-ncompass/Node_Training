const jwt = require("jsonwebtoken");
const secret = "abcdefghijklmnopqrstuvwxyzabcdef";


const genToken = (payload) => {
  return jwt.sign(payload, secret);
};


const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

 module.exports={genToken,verifyToken}

// let token;
//   let authHeader = req.headers["authorization"];
//   if (authHeader.startsWith("Bearer ")) {
//     token = authHeader.substring(7, authHeader.length);
//   } else {
//     token = authHeader;
//   }
//   let val = verifyToken(token, process.env.PRIVATE_KEY);
//   if (!val) {
//     return;
//   }