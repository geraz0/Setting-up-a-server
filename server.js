const http = require('http');  // Import the http module from Node.js

const server = http.createServer((req, res) => {
    // const pathname = url.parse(req.url).pathname;  // Parse the URL to find the path
    // console.log(`Request for ${pathname} received.`);  // Log the request received

    if (req.url === '/') {
        res.statusCode = 200;  // Set HTTP status code to 200 OK
        res.setHeader('Content-Type', 'text/html');  // Set the Content-Type header to text/html
        res.end('<h1>Welcome to the Home Page</h1>');  // Send HTML content for the home page
    
    } else if (req.url === '/api') {
        res.statusCode = 200;  // Set HTTP status code to 200 OK
        res.setHeader('Content-Type', 'application/json');  // Set the Content-Type header to application/json
        res.end(JSON.stringify({ message: 'Hello from the API' }));  // Send JSON content for the API endpoint

    } else {
        res.statusCode = 404;  // Set HTTP status code to 404 Not Found
        res.setHeader('Content-Type', 'text/html');  // Set the Content-Type header to text/html
        res.end('<h1>Page Not Found</h1>');  // Send HTML content for a 404 error

    }
});

const PORT = 3000;  // Define the port number to listen on
server.listen(PORT, () => {  // Start the server and listen on the specified port
  console.log(`Server running at http://localhost:${PORT}/`);  // Log a message when the server starts successfully
});