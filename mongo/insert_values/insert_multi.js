var mongo = require('mongodb');
var url = "mongodb://localhost:27017/";
mongo.connect(url,function(err,db){
    var db = db.db("mydb");
    var myobj=[
        {"name":"kishore","age":20},
        {"name":"arjun","age":21}
    ];
    db.collection("kishore1").insertMany(myobj,function(err,res){
        console.log("Values inserted");
        db.close();
    });
});