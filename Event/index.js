var event = require('events');
//create custom events
//class name EventEmitter need to create obj and use obj
/*like java
classname obj = new classname();
like wise
*/
var myemitter = new event.EventEmitter();
myemitter.on('someEvents',function(msg){
    console.log(msg);
});
myemitter.emit('someEvents','the event was emitted');

myemitter.on('kishore',function(msg1){
    console.log(msg1);
})
myemitter.emit('kishore',"kishore ravi");