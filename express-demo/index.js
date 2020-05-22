const startupDebugger  = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db');//we get a function for writng debugging messages in this namespace
const logger = require('./middleware/logger')
const Joi = require('joi');
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config')
const courses = require('./routes/courses');
const homePage = require('./routes/home');
//Config
console.log('Application Name: '+ config.get('name'))
console.log('Mail Server: '+ config.get('mail.host'))
console.log('Mail Password: '+ config.get('mail.password'))
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(app.get('env'));
if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //console.log('Morgan enabled...');
    startupDebugger('Morgan enabled ...')
}
dbDebugger("Db connected ..");

app.set('view engine', 'pug');
app.set('views', './views');//default
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(logger);
app.use(function (req, res, next){
    console.log('Authenticating ....');
    next();
});
app.use('/api/courses', courses);
app.use('/', homePage);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port} ...`)
})