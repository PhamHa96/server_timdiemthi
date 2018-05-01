var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var studentrouter = require('./router/student.router');
var schoolrouter = require('./router/school.router');
var userrouter = require('./router/user.router');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/apiStudent', studentrouter);
app.use('/apiSchool', schoolrouter);
app.use('/apiUser', userrouter);

mongoose.connect('mongodb://admin:admin@ds163010.mlab.com:63010/timdiemthi', (err) => {
    if (err) {
        console.log('not connect to the database');
    } else {
        console.log('Sucessfully connected to MongoDB')
    }
})


app.listen(8080, (err) => {
    console.log('server running 8080!!')
});