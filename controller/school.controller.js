var School =require('../models/school.model');

module.exports = {
    createSchool: createSchool,
    getSchool: getSchool
    //updateStudent: updateStudent,
    //deleteStudent: deleteStudent
}
function getSchool(){
    return School.find()
        .then((school)=>{
            return Promise.resolve(school);
        }) 
        .catch(err=>{
            return Promise.reject(err);
        })
}
function createSchool(newSchool) {
    var school = new School(newSchool);
    return school.save()
        .then(function (school) {
            return Promise.resolve(school);
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}