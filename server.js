var http = require('http');
var a = 10;
var b = 20;
var c = `<h1>Hello jekeel</h1> ${a + b}`;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(c);
}).listen(3000);
console.log("Server listening on http://localhost:3000");
    
