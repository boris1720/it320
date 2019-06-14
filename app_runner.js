

const exec = require('child_process').exec;
const testscript = exec('npm start');

testscript.stdout.on('data', function(data){
    console.log(data); 
});

testscript.stderr.on('data', function(data){
    console.log(data);
});