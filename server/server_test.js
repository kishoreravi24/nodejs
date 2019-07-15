var http = require('http');
var fs = require('fs');
var process = require('process');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(fs.readFileSync('readme.txt','utf-8'));
});
server.listen(4500,'127.0.0.1');
console.log("Server running");
setTimeout(function(){
    process.exit();
},6000);