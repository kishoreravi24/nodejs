var mongo = require('mongodb');
var url = "mongodb://localhost:27017/";
mongo.connect(url,function(err,db){
    var db = db.db("mydb");
    db.collection("kishore1").find({}).toArray(function(err,result){
            console.log(result);
            db.close();
    });
});