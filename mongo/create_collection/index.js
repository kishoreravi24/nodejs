var mongo = require('mongodb');
url="mongodb://localhost:27017/";
mongo.connect(url,function(err,db){
    var db = db.db("mydb");
    db.createCollection("kishore1",function(err,res){
        console.log("Collection created");
        db.close();
    });
});