var Student =require('../models/student.model');

module.exports = {
    createStudent: createStudent,
    getStudent: getStudent,
    getStudentid : getStudentid,
    getStudentname : getStudentname
    //updateStudent: updateStudent,
    //deleteStudent: deleteStudent
}
function getStudent(){
    return Student.find()
        .then((student)=>{
            return Promise.resolve(student);
        }) 
        .catch(err=>{
            return Promise.reject(err);
        })
}
function createStudent(newStudent) {
    var student = new Student(newStudent);

    return student.save()
        .then(function (student) {
            return Promise.resolve(student);
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}
function getStudentid(maSv){

    return Student.findOne({maSv :maSv})
    .then ((student)=>{
        console.log(student); // trung qua day ne
        return Promise.resolve(student);
    })
    .catch(err=>{
        return Promise.reject(err);
    })
}
function getStudentname(hoTen){

    return Student.findOne({hoTen:hoTen })
    .then ((student)=>{
        return Promise.resolve(student);
    })
    .catch(err=>{
        return Promise.reject(err);
    })
}