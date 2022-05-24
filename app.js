const express = require('express')
const app = express()
const port = 5006

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("<h1>Hello World!<h1>")
})

app.use('/student',require('./route/route'))
app.use('/user_verification',require('./route/verification_route'))

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})
