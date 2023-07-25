const routes = require('./routes.js')
// Problem: We need a simple way to look at a user's badge count and Javascript point from a web server
// Solution: Use Node.js to perform the profile look ups and server our template via http

// Create a web server
var http = require('http')
http
  .createServer(function (request, response) {
    routes.home(request, response)
    routes.user(request, response)
  })
  .listen(3000)
console.log('Server running at at "http://localhost:3000/"')

// Function that handles the reading of files and merge in value
// read from file and get a string
// merge values in to string
