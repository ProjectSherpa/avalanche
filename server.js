const http = require('http');

const handleRequest = (request, response) => {
  response.writeHead(200);
  response.end('Hello World!');
}

const www = http.createServer(handleRequest);
www.listen(8080);
