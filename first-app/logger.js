const EventEmitter = require('events');//this is not funciton or a value
//class is a container for related methods and proeprties

// console.log(__filename);
// console.log(__dirname);
let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        //send http req
        console.log(message);
        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'google.com'});
    }
}


// module.exports.log = log;
// module.exports.endPoint = url;
module.exports = Logger;
 