var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var studentrouter     = require('./router/student.router');
var schoolrouter    =require('./router/school.router');
var cors=require('./cors');
app.use(cors.permission);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/apiStudent',studentrouter);
app.use('/apiSchool', schoolrouter)


mongoose.connect('mongodb://localhost:27017/Student',(err)=>{
    if(err){
        console.log('not connect to the database');
    } else {
        console.log('Suucessfully connected to MongoDB')
    }
})

// Add headers
app.use(function (req, res, next) {
    
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });
app.listen(8080,(err)=>{
    console.log('server running 8080!!')
});