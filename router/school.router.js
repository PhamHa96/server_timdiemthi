var School = require('../models/school.model');
var router = require('express').Router();
var schoolController = require('../controller/school.controller');

router.get('/', getSchools);
router.post('/', createSchool);

module.exports = router

function getSchools(req,res){
    schoolController.getSchool()
    .then(school=>{
       return res.send(school)
    })
    .catch(err=>{
        return res.send('fail')
    })
}
function createSchool(req, res) {
    var newSchool = new School(req.body);
    schoolController.createSchool(newSchool).then(function (schools) {
        res.send(schools);
    }, function (err) {
        //   next(err); // cai next nay la khi nao may add error handdler moi next con ko next la gi  
        res.send('fail!');
    })
}