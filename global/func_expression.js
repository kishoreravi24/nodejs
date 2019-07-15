//normal function
function hi(){
    console.log("HI");
};
hi();

//function expression
var hello=function(x){
    console.log(x);
}
hello("kishore");
//another example
function tamil(eng){
    eng();
}
var hello1=function(){
    console.log("kishore ravi");
}
tamil(hello1);//sending hello1 function expression to tamil and tamil call the hello1 function