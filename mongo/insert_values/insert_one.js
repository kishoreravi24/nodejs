var mongo = require('mongodb');
var url = "mongodb://localhost:27017/";
mongo.connect(url,function(err,db){
    var db = db.db("mydb");
    myobj={name:'John',age:18};
    db.collection("kishore1").insertOne(myobj,function(err,res){
        console.log("inserted success");
        db.close();
    });
})