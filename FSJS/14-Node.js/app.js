// Problem: We need a simple way to look at a user's badge count and Javascript point from a web server
// Solution: Use Node.js to perform the profile look ups and server our template via http

// 1. Create a web server

var http = require('http')
http
  .createServer(function (request, response) {
    homeRoute(request, response)
  })
  .listen(3000)
console.log('Server running at at "http://localhost:3000/"')

// 2. Handle the HTTP route GET/ and POST / i.e Home
function homeRoute(request, response) {
  // if url == '/' && GET
  if (request.url === '/') {
    // show search
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Header\n')
    response.write('Search\n')
    response.end('Footer\n')
  }

  // if url  === '/' && POST
  // redirect to /:username
}

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
