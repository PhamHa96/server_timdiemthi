var Student = require('../models/student.model');
var router = require('express').Router();
var studentController = require('../controller/student.controller');

router.get('/', getStudents);
router.post('/', createStudent);

module.exports = router

function getStudents(req,res){
    studentController.getStudent()
    .then(user=>{
       return res.send(user)
    })
    .catch(err=>{
        return res.send('fail')
    })
}
function createStudent(req, res) {
    var newStudent = new Student(req.body);
    studentController.createStudent(newStudent).then(function (students) {
        res.send(students);
    }, function (err) {
        //   next(err); // cai next nay la khi nao may add error handdler moi next con ko next la gi  
        res.send(err);
        res.send('fail!');
    })
}