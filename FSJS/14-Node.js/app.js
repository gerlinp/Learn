// Problem: We need a simple way to look at a user's badge count and Javascript point from a web server
// Solution: Use Node.js to perform the profile look ups and server our template via http

// 1. Create a web server

var http = require('http')
http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('THis is before the end\n')
    response.end('Hello World\n')
    response.write('this is after the end\n')
  })
  .listen(3000)
console.log('Server running at at localhost:3000/ i hope')

// 2. Handle the HTTP route GET/ and POST / i.e Home
// if url == '/' && GET
// show search
// if url  === '/' && POST
// redirect to /:username

// 3. Handle the HTTP route GET /: username i.e. /chalkers
// if url == '/....'
// get json from Treehouse
// on 'end'
// show profile
// on 'error'
// show error
// 4. function that handles the reading of files and merge in value
// read from file and get a string
// merge values in to string
