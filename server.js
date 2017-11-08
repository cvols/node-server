// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;

var portTwo = 7500;

// Create a generic function to handle requests and responses
function handleRequest(req, resp) {

  // Send the below string to the client when the user visits the PORT URL
  resp.end('You are skinny');
}

function handleRequestTwo(req, resp) {
    resp.end('You are fat')
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

var serverTwo = http.createServer(handleRequestTwo)


// Start our server so that it can begin listening to client requests.
function one() {
    server.listen(PORT, function() {
        
          // Log (server-side) when our server has started
          console.log("Server listening on: http://localhost:" + PORT);
        });
}

function two() {
    serverTwo.listen(portTwo, function() {
        console.log("Server listening on: http://localhost:" + portTwo)
    })
}

one()