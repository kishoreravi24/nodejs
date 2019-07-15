var fs = require('fs');
var data={
    name:"kishore",
    age:"20"
};
var data1 = JSON.stringify(data);
fs.writeFileSync('readme.json',data1);