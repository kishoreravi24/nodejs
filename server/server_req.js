var http = require('http');

var server = http.createServer(function(req,res){
    console.log("request url:"+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("See terminal for the request url");
});
server.listen(3002,'127.0.0.1');
console.log("server running");
