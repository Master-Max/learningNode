var http = require('http');

//server object:
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!<h1>');
  res.end();
}).listen(3000, () => {
  console.log("server start at port 3000");
});
