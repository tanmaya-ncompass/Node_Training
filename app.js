const express = require('express')
const app = express()
const port = 3000

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("<h1>Hello World!<h1>")
})

app.use('/student',require('./route/route'))

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})