var Student = require('../models/student.model');
var router = require('express').Router();
var studentController = require('../controller/student.controller');

router.get('/search',searchStudent)
router.get('/', getStudents);
router.post('/', createStudent);
router.get('/:id', getStudentid);

module.exports = router

function searchStudent(req,res){
   console.log('sasa');
   console.log(req.query + 'sasas');
    // studentController.getStudentname (req.query)
    // .then(student=>{
    //     return res.send(student)
    //  })
    //  .catch(err=>{
    //      return res.send('fail')
    //  })
}

function getStudents(req,res){
    studentController.getStudent()
    .then(student=>{
       return res.send(student)
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
function getStudentid(req,res){
    var masv = req.params.id;
    studentController.getStudentid(masv)
    .then(student=>{
        return res.send(student)
     })
     .catch(err=>{
         return res.send('fail')
     })
}
