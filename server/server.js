var http = require('http');
var process = require('process');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("kishore ravi");
});
server.listen(4501,'127.0.0.1');
console.log("Server running");
setInterval(function(){
    process.exit();
},5000);
