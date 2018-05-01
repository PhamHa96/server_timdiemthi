var Student =require('../models/student.model');

module.exports = {
    createStudent: createStudent,
    getStudent: getStudent
    //updateStudent: updateStudent,
    //deleteStudent: deleteStudent
}
function getStudent(){
    return Student.find()
        .then((user)=>{
            return Promise.resolve(user);
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