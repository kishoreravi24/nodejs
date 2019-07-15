var express = require('express');
var app =express();
app.get('/',function(req,res){
    res.end("kishore is awesome bro");
});
app.listen(3000);