const http = require('http');

const hostname = '127.0.0.1'; // Replace with your desired hostname
const port = 3000; // Replace with your desired port number

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write a response
  res.end('Hello, Node.js HTTP Server!');
});

// Listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
