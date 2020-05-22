const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.write('hello world');
        res.end();
    }

    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
console.log(server);

server.listen(3000);
server.on('connection', (socket) => {
    console.log('New Connection  ..')
})
console.log('Listening on  port 3000...');
// const Logger = require('./logger');
// const logger = new Logger()
// //Register a listener
// logger.on('messageLogged', function (message) {
//     console.log('listener called', message)
// })

// logger.log('messasge')

//console.log(emitter.eventNames())

// const fs = require('fs');

// console.log(fs.readdirSync('./'))
// console.log(fs.readdir('$', function (err, files){
//     if (err) console.log('Error ', err);
//     else console.log('Result ', files)
// }))



//const os = require('os');
// const logger = require('./logger.js');
// const path = require('path');

// var pathObj = path.parse(__filename)
// console.log(pathObj)
// var totalMem = os.totalmem();
// var freeMem = os.freemem();

// console.log(`Total Memory: ${totalMem}`)//ES6
// console.log(`Free Memory: ${freeMem}`)
// console.log(os.cpus())
// console.log(os.networkInterfaces())
// console.log(os.endianness())
// console.log(os.platform())
// console.log(os.userInfo())
// console.log(os.version())
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.release())

// function hello(name){
//     console.log('Hello ' + name);
// }


//hello("Sid")
//console.log(module)
//console.log(global.console)

//console.log(logger);
//logger.log("hi from app");

//nodejs.org - DOCS - list of builtin module 
//File System, HTTP, OS, Path, Process, Query Strings, Stream