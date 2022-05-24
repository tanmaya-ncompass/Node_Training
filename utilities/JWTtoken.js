const jwt = require("jsonwebtoken");
const secret = "abcdefghijklmnopqrstuvwxyzabcdef";


const genToken = (payload) => {
  return jwt.sign(payload, secret);
};


const verifyToken = (token) => {
  return jwt.verify(token, secret);
};


// console.log(genToken("hello", "nub"));
// console.log(
//   verifyToken(
//     "eyJhbGciOiJIUzI1NiJ9.aGVsbG8.BNDcZJsWWu5Y36VN-RM6iC11LUQOcRg786T4qe0IHgY",
//     "nub"
//   )
//);

module.exports={genToken,verifyToken}