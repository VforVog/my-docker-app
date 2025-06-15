// Imports the http module
const http = require('http');

// Defines Hostnmae and port number for the http server
const hostname = '0.0.0.0';
const port = 3000;

// Crates a new http server that gives a msg Hello Docker World as a response
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Docker World!\n');
});

//Starts the http server and prints the msg indicating that the server is running
server.listen (port, hostname, () => {
    console.log (`Server running on http://${hostname}:${port}/`);
});
