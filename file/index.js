var fs=require('fs');
var read=fs.readFileSync('readme.txt','utf-8');
fs.writeFileSync('writeme.txt',read);
console.log(read);