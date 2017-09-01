#! /usr/bin/env node
console.log("Hello DI team. This is a simple CLI created with node");
var sum = parseInt(process.argv[2]) + parseInt(process.argv[3]);
console.log('*************Magic Magic***********');
console.log(process.argv[2] + ' + ' + process.argv[3] + ' = ' + sum);