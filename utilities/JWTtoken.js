const jwt = require("jsonwebtoken");


const genToken = (payload, secret) => {
  return jwt.sign(payload, secret);
};


const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};


console.log(genToken("hello", "nub"));
console.log(
  verifyToken(
    "eyJhbGciOiJIUzI1NiJ9.aGVsbG8.BNDcZJsWWu5Y36VN-RM6iC11LUQOcRg786T4qe0IHgY",
    "nub"
  )
);