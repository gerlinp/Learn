const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('I love coding')
})

app.listen(3000)
