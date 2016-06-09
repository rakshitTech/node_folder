var fs = require('fs'); //filesystem module
var buf = fs.readFileSync(process.argv[2]);  //returns buffer object with complete filesystem
var str = buf.toString().split("\n").length-1;
console.log(str);
