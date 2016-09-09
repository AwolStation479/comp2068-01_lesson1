// http server example: will display to browser

// link to node's http library:
var http = require('http');

// start a local web server (port 3000) and listen for events
http.createServer(function(request,response){
    response.writeHead(200); // page loaded successfully
    response.end('Your first node page');
}).listen(3000);

// print that the server has started:
console.log('Server running at port 3000');