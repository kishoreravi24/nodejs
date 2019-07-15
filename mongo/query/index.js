var mongo = require('mongodb');
var url = "mongodb://localhost:27017/";
mongo.connect(url,function(err,db){
    var db = db.db("mydb");
    var query={name:"kishore"};
    db.collection("kishore1").find(query).toArray(function(err,result){
        console.log(result);
        db.close();
    })
})