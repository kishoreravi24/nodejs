var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var readstream = fs.createReadStream(__dirname+'/index.html','utf-8');
    readstream.pipe(res);
    /*similar like
    res.end(fs.readFileSync('index.html','utf-8'));
    */
});
server.listen(3000,'127.0.0.1');
console.log("Server Running");