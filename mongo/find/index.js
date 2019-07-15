var mongo = require('mongodb');
var http = require('http');
var url ="mongodb://localhost:27017/";
mongo.connect(url,function(err,db){
    var db = db.db("mydb");
    db.collection("kishore1").findOne({},function(err,result){
        var server = http.createServer(function(req,res){
            res.writeHead(200,{'Content-Type':'text/json'});
            res.end(result.name);
        });   
        server.listen(3004,'127.0.0.1');
    });
});