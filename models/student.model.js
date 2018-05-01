var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    maSv:{
        type: String,
        required:true
    },
    hoTen: {
        type: String,
        required:true
    },
    namSinh: {
        type: Number,
        required:true
    },
    khuVuc: {
        type: String,
        required:true
    },
    toan :{
        type: Number,
        required:true
    },
    van:{
        type: Number,
        default:true
    },
    ly: {
        type: Number,
        ref : true
    },
    anh: {
        type: Number,
        ref : true
    },
    hoa: {
        type: Number,
        ref : true
    },
    

})
var student = mongoose.model('student',studentSchema);
module.exports = student;
