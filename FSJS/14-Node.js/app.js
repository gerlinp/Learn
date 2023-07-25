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
